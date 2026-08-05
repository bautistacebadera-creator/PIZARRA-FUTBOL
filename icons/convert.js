const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

async function convertSVGToPNG(svgFile, pngFile, size) {
    try {
        // Leer el SVG
        const svgContent = fs.readFileSync(svgFile, 'utf8');
        
        // Crear canvas
        const canvas = createCanvas(size, size);
        const ctx = canvas.getContext('2d');
        
        // Usar una imagen SVG (Node.js canvas soporta esto)
        const img = await loadImage(Buffer.from(svgContent));
        ctx.drawImage(img, 0, 0, size, size);
        
        // Guardar como PNG (sobrescribe si existe)
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(pngFile, buffer);
        
        console.log(`Convertido ${svgFile} a ${pngFile}`);
        return true;
    } catch (error) {
        console.error(`Error convirtiendo ${svgFile}:`, error);
        return false;
    }
}

async function main() {
    console.log('Iniciando conversión de iconos...');
    
    const conversions = [
        { svg: 'icon-192.svg', png: 'icon-192.png', size: 192 },
        { svg: 'icon-512.svg', png: 'icon-512.png', size: 512 },
        { svg: 'icon-base.svg', png: 'apple-touch-icon.png', size: 192 },
        { svg: 'icon-base.svg', png: 'icon-maskable-512.png', size: 512 },
    ];
    
    for (const conv of conversions) {
        await convertSVGToPNG(conv.svg, conv.png, conv.size);
    }
    
    // Eliminar solo archivos temporales, mantener SVG como backup
    try {
        fs.unlinkSync('convert.html');
        console.log('Eliminado: convert.html');
    } catch (e) {
        console.log('No se pudo eliminar convert.html (puede no existir)');
    }
    
    try {
        fs.unlinkSync('convert.js');
        console.log('Eliminado: convert.js');
    } catch (e) {
        console.log('No se pudo eliminar convert.js (ya terminado)');
    }
    
    try {
        if (fs.existsSync('convert_svg.py')) {
            fs.unlinkSync('convert_svg.py');
            console.log('Eliminado: convert_svg.py');
        }
    } catch (e) {
        console.log('No se pudo eliminar convert_svg.py');
    }
    
    try {
        if (fs.existsSync('rename.html')) {
            fs.unlinkSync('rename.html');
            console.log('Eliminado: rename.html');
        }
    } catch (e) {
        console.log('No se pudo eliminar rename.html');
    }
    
    console.log('✅ Conversión completada! Los PNG viejos fueron reemplazados con los nuevos diseños B/N.');
    console.log('📁 Los SVG se mantienen como backup.');
}

main().catch(console.error);