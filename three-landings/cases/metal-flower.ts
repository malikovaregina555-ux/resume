// Metal Flower — Originkit. Curved petal sheets and tapered stalk from the supplied preset.
import * as THREE from 'three';
import matcapUrl from './assets/metal-flower-matcap.png';

const PETAL_SEGMENTS_LENGTH = 14;
const PETAL_SEGMENTS_WIDTH = 7;

function stemOffset(distance: number) {
    const span = Math.min(distance, 4.2);
    return -0.16 * Math.sin(Math.PI * span / 3) + 0.04 * span / 3;
}


function buildStem(
    length: number,
    radius: number,
    start: number,
    back: number,
    drop: number
): THREE.BufferGeometry {
    const rings = 24
    const sides = 12
    const positions: number[] = []
    const indices: number[] = []

    for (let i = 0; i <= rings; i++) {
        const f = i / rings
        const y = -f * length
        const x = stemOffset(-y)
        // Squared while it is among the petals, then held: past their reach
        // there is nothing left to stay behind. It leaves the core already set
        // back by the rows behind the front one, which the squared curve alone
        // could never cover — at the top a curve is at nothing, and those rows
        // are not.
        const k = Math.min(1, (f * length) / Math.max(drop, 0.0001))
        const z = -(start + (back - start) * k * k)
        // Tapered toward the foot. A parallel tube reads as wire.
        const r = radius * (1 - 0.38 * f)

        for (let j = 0; j <= sides; j++) {
            const a = (j / sides) * Math.PI * 2
            positions.push(x + Math.cos(a) * r, y, z + Math.sin(a) * r)
        }
    }

    for (let i = 0; i < rings; i++) {
        for (let j = 0; j < sides; j++) {
            const a = i * (sides + 1) + j
            const b = a + sides + 1
            indices.push(a, b, a + 1, b, b + 1, a + 1)
        }
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
    geo.setIndex(indices)
    geo.computeVertexNormals()
    return geo
}

/**
 * One petal, as a parametric sheet. Length runs along Y, width across X, and
 * the sheet lifts and cups in Z.
 */
function buildPetal(
    length: number,
    width: number,
    curl: number,
    cup: number
): THREE.BufferGeometry {
    const nu = PETAL_SEGMENTS_LENGTH
    const nv = PETAL_SEGMENTS_WIDTH
    const positions: number[] = []
    const indices: number[] = []

    for (let iu = 0; iu <= nu; iu++) {
        const u = iu / nu
        /*
         * Widest a little past the middle and closed at both ends. Raised to
         * less than one so the tip comes to a point rather than a rounded stub,
         * which is most of what separates a petal from a leaf.
         */
        const halfWidth = width * Math.pow(Math.sin(Math.PI * u), 0.72)
        // Bending as the square keeps the base flat against the core and puts
        // all of the curve out at the tip, where a real petal has it.
        const bend = -curl * u * u

        for (let iv = 0; iv <= nv; iv++) {
            const v = (iv / nv) * 2 - 1
            positions.push(
                v * halfWidth,
                u * length,
                bend + cup * v * v * length
            )
        }
    }

    for (let iu = 0; iu < nu; iu++) {
        for (let iv = 0; iv < nv; iv++) {
            const a = iu * (nv + 1) + iv
            const b = a + nv + 1
            indices.push(a, b, a + 1, b, b + 1, a + 1)
        }
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
    geo.setIndex(indices)
    // Smooth, not flat: a petal is a curved sheet, and faceting it breaks every
    // highlight into steps exactly where the metal should sweep.
    geo.computeVertexNormals()
    return geo
}

let metalMaterial: THREE.MeshMatcapMaterial;

export function makeMetalMaterial() {
    if (metalMaterial) return metalMaterial;
    const matcap = new THREE.TextureLoader().load(matcapUrl);
    matcap.colorSpace = THREE.SRGBColorSpace;
    metalMaterial = new THREE.MeshMatcapMaterial({
        matcap, side: THREE.DoubleSide, toneMapped: false,
    });
    return metalMaterial;
}

export function makeMetalFlower() {
    const length = 0.78;
    const stemWidth = length * 0.0395;
    const material = makeMetalMaterial();
    const head = new THREE.Group();
    const petalGeometry = buildPetal(length, length * 0.186, 0, 0.022);
    const petals = Array.from({ length: 8 }, (_, i) => {
        const petal = new THREE.Mesh(petalGeometry, material);
        petal.rotation.order = 'ZYX';
        petal.rotation.z = i * Math.PI / 4;
        petal.rotation.x = 0.18;
        head.add(petal);
        return petal;
    });
    head.add(new THREE.Mesh(new THREE.SphereGeometry(length * 0.2, 24, 16), material));
    const stem = new THREE.Mesh(
        buildStem(7, stemWidth, 0, stemWidth * 1.6, length),
        material,
    );
    const leafGeometry = buildPetal(0.72, 0.16, 0.15, 0.15);
    const leaves = [
        { y: -2.15, angle: 1.06, tilt: -0.15, scale: 1 },
        { y: -2.85, angle: -1.00, tilt: 0.26, scale: 0.83 },
    ].map(({ y, angle, tilt, scale }) => {
        const leaf = new THREE.Mesh(leafGeometry, material);
        leaf.position.set(stemOffset(-y), y, -stemWidth * 1.6);
        leaf.rotation.set(tilt, 0, angle, 'ZYX');
        leaf.scale.setScalar(scale);
        return leaf;
    });
    return { head, petals, stem, leaves };
}
