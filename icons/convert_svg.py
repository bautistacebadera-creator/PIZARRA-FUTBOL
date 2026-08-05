from PIL import Image, ImageDraw
import os

def svg_to_raster(svg_file, png_file, size):
    """Convierte SVG a PNG usando PIL"""
    try:
        # Leer SVG
        with open(svg_file, 'r') as f:
            svg_content = f.read()
        
        # Crear imagen desde SVG (PIL soporta esto en versiones recientes)
        img = Image.open(svg_file)
        
        # Redimensionar si es necesario
        if img.size != (size, size):
            img = img.resize((size, size), Image.Resampling.LANCZOS)
        
        # Guardar como PNG
        img.save(png_file, 'PNG')
        print(f"Convertido: {svg_file} -> {png_file}")
        return True
    except Exception as e:
        print(f"Error convirtiendo {svg_file}: {e}")
        return False

def main():
    conversions = [
        ('icon-192.svg', 'icon-192.png', 192),
        ('icon-512.svg', 'icon-512.png', 512),
        ('icon-base.svg', 'apple-touch-icon.png', 192),
        ('icon-base.svg', 'icon-maskable-512.png', 512),
    ]
    
    for svg_file, png_file, size in conversions:
        if os.path.exists(svg_file):
            svg_to_raster(svg_file, png_file, size)
    
    # Eliminar SVG temporales
    temp_files = ['icon-192.svg', 'icon-512.svg', 'icon-base.svg', 'convert_svg.py']
    for f in temp_files:
        if os.path.exists(f):
            os.remove(f)
            print(f"Eliminado: {f}")
    
    print("Conversión completada!")

if __name__ == "__main__":
    main()