//  let element=document.querySelectorAll(".p-2");
// console.log( element[0].style)
// element.forEach((e)=>{



    
//         e.style.padding="24px"
        
        
        
    
// })
// let element2=document.querySelectorAll(".p-3");
// element2.forEach((e)=>{
    
//         e.style.padding="36px"
        
        
        
    
// })
// let element3=document.querySelectorAll(".bg-red");
// element3.forEach((e)=>{
    
//         e.style.backgroundColor="red"
        
        
        
    
// })
// let element4=document.querySelectorAll(".border");
// element4.forEach((e)=>{
    
//         e.style.borderRadius="30px"
        
        
        
    
// }) 
let n=4;

document.addEventListener("DOMContentLoaded",()=>{

const style = document.createElement("style")
style.textContent = `
  *, *::before, *::after { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
  }
  h1, h2, h3, h4, h5, h6, p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`
document.head.appendChild(style)


const stylesheet={
    //padding
    
    
   'p1': { prop: 'padding', val: '4px' },
   'p2': { prop: 'padding', val: '8px' },
   'p3': { prop: 'padding', val: '12px' },
   'p4': { prop: 'padding', val: '20px' },
   'p5': { prop: 'padding', val: '24px' },
   'p6': { prop: 'padding', val: '28px' },
   'p7': { prop: 'padding', val: '32px' },
   'p8': { prop: 'padding', val: '36px' },
   'p9': { prop: 'padding', val: '40px' },
   'p10': { prop: 'padding', val: '44px' },
//margin
   'm1': { prop: 'margin', val: '4px' },
   'm2': { prop: 'margin', val: '8px' },
   'm3': { prop: 'margin', val: '12px' },
   'm4': { prop: 'margin', val: '20px' },
   'm5': { prop: 'margin', val: '24px' },
   'm6': { prop: 'margin', val: '28px' },
   'm7': { prop: 'margin', val: '32px' },
   'm8': { prop: 'margin', val: '36px' },
   'm9': { prop: 'margin', val: '40px' },
   'm10': { prop: 'margin', val: '44px' },


   //background color
   //red shades
'bg-red-1':  { prop: 'backgroundColor', val: '#fff1f2' },
'bg-red-2':  { prop: 'backgroundColor', val: '#fecdd3' },
'bg-red-3':  { prop: 'backgroundColor', val: '#fda4af' },
'bg-red-4':  { prop: 'backgroundColor', val: '#fb7185' },
'bg-red-5':  { prop: 'backgroundColor', val: '#f43f5e' },
'bg-red-6':  { prop: 'backgroundColor', val: '#e11d48' },
'bg-red-7':  { prop: 'backgroundColor', val: '#be123c' },
'bg-red-8':  { prop: 'backgroundColor', val: '#9f1239' },
'bg-red-9':  { prop: 'backgroundColor', val: '#881337' },
'bg-red-10': { prop: 'backgroundColor', val: '#4c0519' },    

   //blue shades 
    'bg-blue-1':  { prop: 'backgroundColor', val: '#eff6ff' },
'bg-blue-2':  { prop: 'backgroundColor', val: '#bfdbfe' },
'bg-blue-3':  { prop: 'backgroundColor', val: '#93c5fd' },
'bg-blue-4':  { prop: 'backgroundColor', val: '#60a5fa' },
'bg-blue-5':  { prop: 'backgroundColor', val: '#3b82f6' },
'bg-blue-6':  { prop: 'backgroundColor', val: '#2563eb' },
'bg-blue-7':  { prop: 'backgroundColor', val: '#1d4ed8' },
'bg-blue-8':  { prop: 'backgroundColor', val: '#1e40af' },
'bg-blue-9':  { prop: 'backgroundColor', val: '#1e3a8a' },
'bg-blue-10': { prop: 'backgroundColor', val: '#172554' },
    //green shades
    'bg-green-1':  { prop: 'backgroundColor', val: '#f0fdf4' },
'bg-green-2':  { prop: 'backgroundColor', val: '#bbf7d0' },
'bg-green-3':  { prop: 'backgroundColor', val: '#86efac' },
'bg-green-4':  { prop: 'backgroundColor', val: '#4ade80' },
'bg-green-5':  { prop: 'backgroundColor', val: '#22c55e' },
'bg-green-6':  { prop: 'backgroundColor', val: '#16a34a' },
'bg-green-7':  { prop: 'backgroundColor', val: '#15803d' },
'bg-green-8':  { prop: 'backgroundColor', val: '#166534' },
'bg-green-9':  { prop: 'backgroundColor', val: '#14532d' },
'bg-green-10': { prop: 'backgroundColor', val: '#052e16' },

    //yellow shades
    'bg-yellow-1':  { prop: 'backgroundColor', val: '#fefce8' },
'bg-yellow-2':  { prop: 'backgroundColor', val: '#fef9c3' },
'bg-yellow-3':  { prop: 'backgroundColor', val: '#fef08a' },
'bg-yellow-4':  { prop: 'backgroundColor', val: '#fde047' },
'bg-yellow-5':  { prop: 'backgroundColor', val: '#eab308' },
'bg-yellow-6':  { prop: 'backgroundColor', val: '#ca8a04' },
'bg-yellow-7':  { prop: 'backgroundColor', val: '#a16207' },
'bg-yellow-8':  { prop: 'backgroundColor', val: '#854d0e' },
'bg-yellow-9':  { prop: 'backgroundColor', val: '#713f12' },
'bg-yellow-10': { prop: 'backgroundColor', val: '#422006' },

    //dark shades
    'bg-gray-1':  { prop: 'backgroundColor', val: '#f9fafb' },
'bg-gray-2':  { prop: 'backgroundColor', val: '#f3f4f6' },
'bg-gray-3':  { prop: 'backgroundColor', val: '#e5e7eb' },
'bg-gray-4':  { prop: 'backgroundColor', val: '#d1d5db' },
'bg-gray-5':  { prop: 'backgroundColor', val: '#9ca3af' },
'bg-gray-6':  { prop: 'backgroundColor', val: '#6b7280' },
'bg-gray-7':  { prop: 'backgroundColor', val: '#4b5563' },
'bg-gray-8':  { prop: 'backgroundColor', val: '#374151' },
'bg-gray-9':  { prop: 'backgroundColor', val: '#1f2937' },
'bg-gray-10': { prop: 'backgroundColor', val: '#111827' },
    //light shades 
    'bg-white-1':  { prop: 'backgroundColor', val: '#ffffff' },
'bg-white-2':  { prop: 'backgroundColor', val: '#fafafa' },
'bg-white-3':  { prop: 'backgroundColor', val: '#f5f5f5' },
'bg-white-4':  { prop: 'backgroundColor', val: '#f0f0f0' },
'bg-white-5':  { prop: 'backgroundColor', val: '#e8e8e8' },
'bg-white-6':  { prop: 'backgroundColor', val: '#e0e0e0' },
'bg-white-7':  { prop: 'backgroundColor', val: '#d4d4d4' },
'bg-white-8':  { prop: 'backgroundColor', val: '#c8c8c8' },
'bg-white-9':  { prop: 'backgroundColor', val: '#b0b0b0' },
'bg-white-10': { prop: 'backgroundColor', val: '#a0a0a0' },
    //brwon shades
    'bg-brown-1':  { prop: 'backgroundColor', val: '#fdf8f0' },
'bg-brown-2':  { prop: 'backgroundColor', val: '#f5e6d3' },
'bg-brown-3':  { prop: 'backgroundColor', val: '#e8c9a0' },
'bg-brown-4':  { prop: 'backgroundColor', val: '#d4a574' },
'bg-brown-5':  { prop: 'backgroundColor', val: '#b8864e' },
'bg-brown-6':  { prop: 'backgroundColor', val: '#9a6b3c' },
'bg-brown-7':  { prop: 'backgroundColor', val: '#7d5230' },
'bg-brown-8':  { prop: 'backgroundColor', val: '#623d22' },
'bg-brown-9':  { prop: 'backgroundColor', val: '#4a2c16' },
'bg-brown-10': { prop: 'backgroundColor', val: '#2c1a0e' },

    // cream shades
    'bg-cream-1':  { prop: 'backgroundColor', val: '#fffef7' },
'bg-cream-2':  { prop: 'backgroundColor', val: '#fffde8' },
'bg-cream-3':  { prop: 'backgroundColor', val: '#fefbd4' },
'bg-cream-4':  { prop: 'backgroundColor', val: '#fdf6c0' },
'bg-cream-5':  { prop: 'backgroundColor', val: '#fcf0a8' },
'bg-cream-6':  { prop: 'backgroundColor', val: '#f7e48a' },
'bg-cream-7':  { prop: 'backgroundColor', val: '#f0d470' },
'bg-cream-8':  { prop: 'backgroundColor', val: '#e8c055' },
'bg-cream-9':  { prop: 'backgroundColor', val: '#d4a832' },
'bg-cream-10': { prop: 'backgroundColor', val: '#b8900e' },

    //pink shades
    'bg-pink-1':  { prop: 'backgroundColor', val: '#fdf2f8' },
'bg-pink-2':  { prop: 'backgroundColor', val: '#fce7f3' },
'bg-pink-3':  { prop: 'backgroundColor', val: '#fbcfe8' },
'bg-pink-4':  { prop: 'backgroundColor', val: '#f9a8d4' },
'bg-pink-5':  { prop: 'backgroundColor', val: '#f472b6' },
'bg-pink-6':  { prop: 'backgroundColor', val: '#ec4899' },
'bg-pink-7':  { prop: 'backgroundColor', val: '#db2777' },
'bg-pink-8':  { prop: 'backgroundColor', val: '#be185d' },
'bg-pink-9':  { prop: 'backgroundColor', val: '#9d174d' },
'bg-pink-10': { prop: 'backgroundColor', val: '#500724' },

//orange shades

'bg-orange-1':  { prop: 'backgroundColor', val: '#fff7ed' },
'bg-orange-2':  { prop: 'backgroundColor', val: '#ffedd5' },
'bg-orange-3':  { prop: 'backgroundColor', val: '#fed7aa' },
'bg-orange-4':  { prop: 'backgroundColor', val: '#fdba74' },
'bg-orange-5':  { prop: 'backgroundColor', val: '#fb923c' },
'bg-orange-6':  { prop: 'backgroundColor', val: '#f97316' },
'bg-orange-7':  { prop: 'backgroundColor', val: '#ea580c' },
'bg-orange-8':  { prop: 'backgroundColor', val: '#c2410c' },
'bg-orange-9':  { prop: 'backgroundColor', val: '#9a3412' },
'bg-orange-10': { prop: 'backgroundColor', val: '#431407' },


//purple shades
'bg-purple-1':  { prop: 'backgroundColor', val: '#faf5ff' },
'bg-purple-2':  { prop: 'backgroundColor', val: '#e9d5ff' },
'bg-purple-3':  { prop: 'backgroundColor', val: '#d8b4fe' },
'bg-purple-4':  { prop: 'backgroundColor', val: '#c084fc' },
'bg-purple-5':  { prop: 'backgroundColor', val: '#a855f7' },
'bg-purple-6':  { prop: 'backgroundColor', val: '#9333ea' },
'bg-purple-7':  { prop: 'backgroundColor', val: '#7e22ce' },
'bg-purple-8':  { prop: 'backgroundColor', val: '#6b21a8' },
'bg-purple-9':  { prop: 'backgroundColor', val: '#581c87' },
'bg-purple-10': { prop: 'backgroundColor', val: '#3b0764' },

//teal shades
'bg-teal-1':  { prop: 'backgroundColor', val: '#f0fdfa' },
'bg-teal-2':  { prop: 'backgroundColor', val: '#ccfbf1' },
'bg-teal-3':  { prop: 'backgroundColor', val: '#99f6e4' },
'bg-teal-4':  { prop: 'backgroundColor', val: '#5eead4' },
'bg-teal-5':  { prop: 'backgroundColor', val: '#2dd4bf' },
'bg-teal-6':  { prop: 'backgroundColor', val: '#14b8a6' },
'bg-teal-7':  { prop: 'backgroundColor', val: '#0d9488' },
'bg-teal-8':  { prop: 'backgroundColor', val: '#0f766e' },
'bg-teal-9':  { prop: 'backgroundColor', val: '#115e59' },
'bg-teal-10': { prop: 'backgroundColor', val: '#042f2e' },

//indigo shades
 'bg-indigo-1':  { prop: 'backgroundColor', val: '#eef2ff' },
'bg-indigo-2':  { prop: 'backgroundColor', val: '#e0e7ff' },
'bg-indigo-3':  { prop: 'backgroundColor', val: '#c7d2fe' },
'bg-indigo-4':  { prop: 'backgroundColor', val: '#a5b4fc' },
'bg-indigo-5':  { prop: 'backgroundColor', val: '#818cf8' },
'bg-indigo-6':  { prop: 'backgroundColor', val: '#6366f1' },
'bg-indigo-7':  { prop: 'backgroundColor', val: '#4f46e5' },
'bg-indigo-8':  { prop: 'backgroundColor', val: '#4338ca' },
'bg-indigo-9':  { prop: 'backgroundColor', val: '#3730a3' },
'bg-indigo-10': { prop: 'backgroundColor', val: '#1e1b4b' },

//black ui 
'bg-black-1':  { prop: 'backgroundColor', val: '#0a0a0a' },
'bg-black-2':  { prop: 'backgroundColor', val: '#111111' },
'bg-black-3':  { prop: 'backgroundColor', val: '#1a1a1a' },
'bg-black-4':  { prop: 'backgroundColor', val: '#222222' },
'bg-black-5':  { prop: 'backgroundColor', val: '#2a2a2a' },
'bg-black-6':  { prop: 'backgroundColor', val: '#333333' },
'bg-black-7':  { prop: 'backgroundColor', val: '#3d3d3d' },
'bg-black-8':  { prop: 'backgroundColor', val: '#4a4a4a' },
'bg-black-9':  { prop: 'backgroundColor', val: '#555555' },
'bg-black-10': { prop: 'backgroundColor', val: '#666666' },



    
   
   //border radius
   'b-sm': { prop: 'borderRadius', val: '4px' },
   'b-md': { prop: 'borderRadius', val: '8px' },
   'b-lg': { prop: 'borderRadius', val: '16px' },
   'b-xl': { prop: 'borderRadius', val: '24px' },
   'b-2xl': { prop: 'borderRadius', val: '32px' },
   'b-3xl': { prop: 'borderRadius', val: '40px' },
   'b-4xl': { prop: 'borderRadius', val: '48px' },
   'b-5xl': { prop: 'borderRadius', val: '56px' },
   'b-6xl': { prop: 'borderRadius', val: '64px' },
   'b-7xl': { prop: 'borderRadius', val: '72px' },
   'b-circle': { prop: 'borderRadius', val: '50%' },

   //border
    'b-1': { prop: 'border', val: '1px solid black' },
    'b-2': { prop: 'border', val: '2px solid black' }, 
    'b-4': { prop: 'border', val: '4px solid black' },
    'b-8': { prop: 'border', val: '8px solid black' },

//text color
// red
't-red-3':  { prop: 'color', val: '#fda4af' },  // highlight on dark bg
't-red-5':  { prop: 'color', val: '#f43f5e' },  // punch / vibrant
't-red-7':  { prop: 'color', val: '#be123c' },  // body readable
't-red-9':  { prop: 'color', val: '#881337' },   //bold / dark background

// blue
't-blue-3':  { prop: 'color', val: '#93c5fd' },
't-blue-5':  { prop: 'color', val: '#3b82f6' },
't-blue-7':  { prop: 'color', val: '#1d4ed8' },
't-blue-9':  { prop: 'color', val: '#1e3a8a' },

// green
't-green-3':  { prop: 'color', val: '#86efac' },
't-green-5':  { prop: 'color', val: '#22c55e' },
't-green-7':  { prop: 'color', val: '#15803d' },
't-green-9':  { prop: 'color', val: '#14532d' },

// purple
't-purple-3':  { prop: 'color', val: '#d8b4fe' },
't-purple-5':  { prop: 'color', val: '#a855f7' },
't-purple-7':  { prop: 'color', val: '#7e22ce' },
't-purple-9':  { prop: 'color', val: '#581c87' },

// pink
't-pink-3':  { prop: 'color', val: '#fbcfe8' },
't-pink-5':  { prop: 'color', val: '#f472b6' },
't-pink-7':  { prop: 'color', val: '#db2777' },
't-pink-9':  { prop: 'color', val: '#9d174d' },

// orange
't-orange-3':  { prop: 'color', val: '#fed7aa' },
't-orange-5':  { prop: 'color', val: '#fb923c' },
't-orange-7':  { prop: 'color', val: '#ea580c' },
't-orange-9':  { prop: 'color', val: '#9a3412' },

// teal
't-teal-3':  { prop: 'color', val: '#99f6e4' },
't-teal-5':  { prop: 'color', val: '#2dd4bf' },
't-teal-7':  { prop: 'color', val: '#0d9488' },
't-teal-9':  { prop: 'color', val: '#115e59' },

// yellow
't-yellow-3':  { prop: 'color', val: '#fef08a' },
't-yellow-5':  { prop: 'color', val: '#eab308' },
't-yellow-7':  { prop: 'color', val: '#a16207' },
't-yellow-9':  { prop: 'color', val: '#713f12' },

// gray — full scale (most used)
't-gray-1':  { prop: 'color', val: '#f9fafb' },
't-gray-2':  { prop: 'color', val: '#f3f4f6' },
't-gray-3':  { prop: 'color', val: '#e5e7eb' },
't-gray-4':  { prop: 'color', val: '#d1d5db' },
't-gray-5':  { prop: 'color', val: '#9ca3af' },
't-gray-6':  { prop: 'color', val: '#6b7280' },
't-gray-7':  { prop: 'color', val: '#4b5563' },
't-gray-8':  { prop: 'color', val: '#374151' },
't-gray-9':  { prop: 'color', val: '#1f2937' },
't-gray-10': { prop: 'color', val: '#111827' },

// basics
't-white':  { prop: 'color', val: '#ffffff' },
't-black':  { prop: 'color', val: '#000000' },
't-muted':  { prop: 'color', val: '#6b7280' },
't-chai':   { prop: 'color', val: '#f97316' },
//text utlity
't-center': { prop: 'textAlign', val: 'center' }, // text align center
't-left': { prop: 'textAlign', val: 'left' }, // text align left
't-right': { prop: 'textAlign', val: 'right' }, // text align right
't-justify': { prop: 'textAlign', val: 'justify' }, // text align justify
//text decoration
't-underline': { prop: 'textDecoration', val: 'underline' }, // text underline
't-line-through': { prop: 'textDecoration', val: 'line-through' }, // text line through
't-overline': { prop: 'textDecoration', val: 'overline' }, // text overline
't-none': { prop: 'textDecoration', val: 'none' }, // text decoration none   


//flex box
'flx': { prop: 'display', val: 'flex' }, // display flex 
'j-center':{prop:'justifyContent', val: 'center'}, // justify content center
'j-start':{prop:'justifyContent', val: 'flex-start'}, // justify content start
'j-end':{prop:'justifyContent', val: 'flex-end'}, // justify content end
'j-between':{prop:'justifyContent', val: 'space-between'}, // justify content between
'j-around':{prop:'justifyContent', val: 'space-around'}, // justify content around
'j-evenly':{prop:'justifyContent', val: 'space-evenly'}, // justify content evenly
'a-center':{prop:'alignItems', val: 'center'}, // align items center
'a-start':{prop:'alignItems', val: 'flex-start'}, // align items start
'a-end':{prop:'alignItems', val: 'flex-end'}, // align items end
'a-stretch':{prop:'alignItems', val: 'stretch'}, // align items stretch
'a-baseline':{prop:'alignItems', val: 'baseline'}, // align items baseline
'wrap': { prop: 'flexWrap', val: 'wrap' }, // flex wrap












}
Object.keys(stylesheet).forEach((cls)=>{//this give every key which is our class
    document.querySelectorAll(
        `.${cls}`
    ).forEach((e)=>{
        e.style[stylesheet[cls].prop]=stylesheet[cls].val

    })



})})














