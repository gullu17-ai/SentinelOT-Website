import * as THREE from 'three';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
export type HardwareController = { dispose: () => void; rotate: (x: number, y: number) => void; zoom: (factor: number) => void; flip: () => void; reset: () => void; setPlaying: (value: boolean) => void };
export function createHardwareScene(host: HTMLElement, onPlaying: (value: boolean) => void, onError: () => void): HardwareController {
 const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
 renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
 renderer.outputColorSpace = THREE.SRGBColorSpace;
 renderer.setClearColor(0xf0f3ee, 1);
 host.appendChild(renderer.domElement);
 renderer.domElement.setAttribute('aria-hidden', 'true');
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(36, 1, .1, 100);
 camera.position.set(8, 11, 13);
 const controls = new TrackballControls(camera, renderer.domElement);
 controls.rotateSpeed = 3; controls.zoomSpeed = 1.1; controls.noPan = true;
 controls.minDistance = 8; controls.maxDistance = 27; controls.staticMoving = true;
 const board = new THREE.Group(); scene.add(board);
 scene.add(new THREE.HemisphereLight(0xffffff, 0x53615c, 3));
 const key = new THREE.DirectionalLight(0xffffff, 4); key.position.set(-3, 12, 8); scene.add(key);
 const rim = new THREE.DirectionalLight(0xdde9e7, 2); rim.position.set(8, 3, -6); scene.add(rim);
 const green = new THREE.MeshStandardMaterial({ color: 0x1d7555, roughness: .72, metalness: .12 });
 const black = new THREE.MeshStandardMaterial({ color: 0x22292a, roughness: .6 });
 const metal = new THREE.MeshStandardMaterial({ color: 0xb7c0c3, metalness: .72, roughness: .31 });
 const gold = new THREE.MeshStandardMaterial({ color: 0xc2a95c, metalness: .72, roughness: .38 });
 const blue = new THREE.MeshStandardMaterial({ color: 0x175f89, roughness: .5 });
 const cream = new THREE.MeshStandardMaterial({ color: 0xc9c7ad, roughness: .8 });
 function box(w: number, h: number, d: number, x: number, y: number, z: number, material: THREE.Material) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w,h,d), material); mesh.position.set(x,y,z); board.add(mesh); return mesh;
 }
 const shape = new THREE.Shape();
 const w = 8.5, d = 5.6, r = .25;
 shape.moveTo(-w/2+r,-d/2);shape.lineTo(w/2-r,-d/2);shape.quadraticCurveTo(w/2,-d/2,w/2,-d/2+r);shape.lineTo(w/2,d/2-r);shape.quadraticCurveTo(w/2,d/2,w/2-r,d/2);shape.lineTo(-w/2+r,d/2);shape.quadraticCurveTo(-w/2,d/2,-w/2,d/2-r);shape.lineTo(-w/2,-d/2+r);shape.quadraticCurveTo(-w/2,-d/2,-w/2+r,-d/2);
 for (const x of [-3.85, 2.65]) for (const z of [-2.35, 2.35]) { const hole = new THREE.Path();hole.absarc(x,z,.145,0,Math.PI*2,true);shape.holes.push(hole); }
 const pcb = new THREE.Mesh(new THREE.ExtrudeGeometry(shape,{ depth:.16, bevelEnabled:false, curveSegments:16 }), green); pcb.rotation.x = -Math.PI/2; board.add(pcb);
 for (const x of [-3.85, 2.65]) for (const z of [-2.35, 2.35]) {
  const ring = new THREE.Mesh(new THREE.RingGeometry(.145,.24,24), gold); ring.rotation.x=-Math.PI/2;ring.position.set(x,.17,z);board.add(ring);
  const reverse = ring.clone();reverse.rotation.x=Math.PI/2;reverse.position.y=-.01;board.add(reverse);
 }
 function label(text: string, x: number, z: number, width: number, depth: number, y=.205, color='#e7eee2', upside=false) {
  const canvas=document.createElement('canvas');canvas.width=768;canvas.height=128;
  const ctx=canvas.getContext('2d')!;ctx.fillStyle=color;ctx.font='600 55px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,384,64);
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(width,depth),new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false}));mesh.rotation.x=upside?Math.PI/2:-Math.PI/2;mesh.position.set(x,y,z);board.add(mesh);
 }
 // Component placement is illustrative, with the board interfaces recognizable from Pi 5.
 box(1.55,.18,1.55,-.85,.28,.15,black);box(1.3,.08,1.3,-.85,.41,.15,metal);label('BCM2712',-.85,.15,1.12,.22,.455,'#34413d');
 box(1.15,.15,.95,-2.45,.28,.3,black);label('SDRAM',-2.45,.3,.93,.18,.363);
 box(1.12,.2,1.12,1.15,.29,.25,black);label('RP1',1.15,.25,.8,.22,.4);
 box(1.18,.17,.9,-2.7,.28,-1.35,metal);label('WIRELESS',-2.7,-1.35,.95,.17,.375,'#34413d');
 box(5.0,.28,.48,-.5,.30,-2.32,black);
 for(let row=0;row<2;row++) for(let i=0;i<20;i++) box(.07,.6,.07,-2.87+i*.247,.62,-2.44+row*.25,gold);
 // Stacked USB ports and Ethernet connector use recessed, dark openings.
 for (const [z, insert] of [[-1.76,blue],[-.04,black]] as const) {
  box(1.7,1.35,1.35,3.55,.83,z,metal);
  for(const y of [.48,1.11]) { box(.025,.48,1.12,4.41,y,z,black); box(.04,.12,.92,4.43,y-.08,z,insert);for(let k=0;k<4;k++)box(.045,.025,.08,4.46,y-.01,z-.3+k*.2,gold); }
 }
 box(2,1.55,1.5,3.65,.94,1.75,metal);box(.025,1.1,1.17,4.66,.89,1.75,black);box(.05,.3,.6,4.69,.41,1.75,black);
 for(let i=0;i<8;i++)box(.06,.055,.045,4.7,1.28,1.35+i*.11,gold);
 box(.9,.4,.65,-3.15,.38,2.6,metal);box(.67,.2,.02,-3.15,.38,2.935,black);
 for(const x of [-1.7,-.4]) {box(.78,.34,.55,x,.35,2.62,metal);box(.57,.16,.02,x,.35,2.91,black);}
 for(const x of [.6,1.6]) {box(.65,.15,.3,x,.28,1.65,cream);box(.64,.12,.1,x,.36,1.82,black);}
 box(.25,.16,1.1,-3.65,.28,-.25,cream);
 box(.6,.12,.4,-3.85,.28,1.3,black);
 for(let i=0;i<42;i++) {
  const x=-3.3+(i%14)*.39, z=.95+Math.floor(i/14)*.27;
  if(x>2) continue;
  box(.12,.09,.075,x,.22,z,i%3===0?metal:cream);
 }
 for(let i=0;i<17;i++) { const x=-3.1+i*.29; box(.12,.08,.08,x,.22,-1.6,cream); }
 const traceMaterial=new THREE.LineBasicMaterial({ color:0x83b082, transparent:true, opacity:.45 });
 for(let i=0;i<24;i++) {
  const z=-1.35+i*.12;
  const points=[new THREE.Vector3(-3.5,.174,z),new THREE.Vector3(-1.8+i*.08,.174,z),new THREE.Vector3(-1.4+i*.08,.174,z+.4),new THREE.Vector3(2.7,.174,z+.4)];
  board.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),traceMaterial));
  const bottom=points.map(p=>new THREE.Vector3(p.x,-.012,-p.z));board.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottom),traceMaterial));
 }
 box(1.65,.15,1.35,-2.8,-.10,.6,metal);label('microSD',-2.8,.6,1.25,.25,-.18,'#34413d',true);
 for(let i=0;i<36;i++)box(.09,.045,.07,-2.8+(i%12)*.44,-.04,-1.7+Math.floor(i/12)*.27,gold);
 label('Raspberry Pi 5',-.8,-1.15,2.5,.34);label('SENTINELOT / CONCEPT',-.5,2.12,2.8,.23);label('ILLUSTRATIVE HARDWARE STUDY',.5,.0,3,.28,-.03,'#e7eee2',true);
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 let playing=!reduced.matches, visible=true, dead=false, frame=0, last=0;
 onPlaying(playing);
 function render(){ if(!dead && visible)renderer.render(scene,camera); }
 function setPlaying(value:boolean){playing=value;onPlaying(value);render();}
 function stop(){setPlaying(false);}
 controls.addEventListener('start',stop);controls.addEventListener('change',render);
 function resize(){ const width=host.clientWidth,height=host.clientHeight;renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();controls.handleResize();render(); }
 const sizeObserver=new ResizeObserver(resize);sizeObserver.observe(host);
 const visibility=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)render();});visibility.observe(host);
 function motionChange(){if(reduced.matches)setPlaying(false);}
 reduced.addEventListener('change',motionChange);
 function contextLost(event:Event){event.preventDefault();setPlaying(false);onError();}
 renderer.domElement.addEventListener('webglcontextlost',contextLost);
 function animate(time:number){ if(dead)return;frame=requestAnimationFrame(animate);const delta=Math.min((time-last)/1000,.05);last=time;if(!visible||document.hidden)return;controls.update();if(playing){board.rotation.y+=delta*.16;render();} }
 resize();controls.update();render();frame=requestAnimationFrame(animate);
 return {
  setPlaying,
  rotate(x,y){stop();board.rotateX(x);board.rotateY(y);render();},
  flip(){stop();board.rotateX(Math.PI);render();},
  zoom(factor){stop();const direction=camera.position.clone().sub(controls.target);direction.setLength(THREE.MathUtils.clamp(direction.length()*factor,8,27));camera.position.copy(controls.target).add(direction);controls.update();render();},
  reset(){stop();board.rotation.set(0,0,0);controls.reset();camera.position.set(8,11,13);controls.update();render();},
  dispose(){dead=true;cancelAnimationFrame(frame);sizeObserver.disconnect();visibility.disconnect();reduced.removeEventListener('change',motionChange);controls.removeEventListener('start',stop);controls.removeEventListener('change',render);controls.dispose();const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>(),textures=new Set<THREE.Texture>();scene.traverse(object=>{if(object instanceof THREE.Mesh||object instanceof THREE.Line){geometries.add(object.geometry);for(const material of Array.isArray(object.material)?object.material:[object.material]){materials.add(material);if('map' in material && material.map instanceof THREE.Texture)textures.add(material.map);}}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());renderer.dispose();renderer.domElement.remove();}
 };
}
