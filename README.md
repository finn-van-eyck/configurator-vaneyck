# FORGE – Dumbbell Configurator

Finn Van Eyck Development 3 My Little Configurator

Een 3D-configurator voor een halter met displaystandaard van mijn eigen merk FORGE. Je start op een landingspagina en stelt daarna in 7 stappen je halter samen. Het model past zich meteen aan en de prijs en het gewicht rekenen mee.

## Starten

    cd code
    npm install
    npm run dev

## Opties

1. **Schijven:** rond, zeshoek of olympisch
2. **Afwerking:** gietijzer, rubber, urethaan of chroom, in 6 kleuren
3. **Gewicht:** grote en kleine schijven, 1 tot 4 per kant
4. **Grip:** geknurld staal of ergonomisch rubber (met kleur)
5. **Sluiting:** schroef- of snelsluiting
6. **Rack:** geen (de halter zweeft) of een displaystandaard (met kleur)
7. **Licht:** LED-ring aan of uit, met kleur en statisch of pulserend

## Hoe het werkt

- React + Vite + TypeScript, met React Three Fiber en drei voor de 3D.
- Alle opties en prijzen staan in `config/options.ts`. De UI en de 3D lezen allebei daaruit.
- 1 Zustand-store houdt de keuzes bij. De UI past de store aan en het 3D-model leest eruit. Zo zijn UI en 3D gescheiden.
- In mijn eigen hooks gebruik ik GSAP voor de camera per stap, de titels en het verschijnen van de schijven en het rack.
- Ik gebruik `useGLTF` voor het model, `useTexture` voor mijn gebakken textures en `useFrame` voor het zweven en de pulserende LED.
- PBR-materialen, een environment map en een laadscherm met `Suspense` + `useProgress`.
- react-router voor de landingspagina (`/`) en de configurator (`/configure`).
- Werkt op desktop en tablet.

## 3D-model

Ik heb het model en de textures volledig zelf gemaakt in Blender: de halter, 3 schijfvormen (groot en klein), 2 handvatten, 2 sluitingen en de standaard met LED-ring. Alles zit in één `.glb`, gecomprimeerd met Draco (412 KB).

## Afwijkingen van mijn ontwerp

Ik heb enkele dingen uit mijn Figma-ontwerp weggelaten om het eenvoudig te houden: de voortgangsbalk, de snelkeuzes voor het gewicht, het grote reviewpaneel en het logo op de schijven. Daarnaast weegt de stang 2,5 kg in plaats van 1,5 kg, zodat het gewicht logisch optelt.

## Credits

- Environment map: preset `warehouse` van drei (Poly Haven, CC0)
- Lettertypes: Archivo Black en Manrope (Google Fonts)

## AI-gebruik

Ik heb Claude gebruikt voor onderdelen die we niet in de les gezien hadden, of die ik nog niet goed beheerste. Dat was vooral bij de animaties, de camerastand per stap en het LED-gedeelte, omdat dat redelijk veel en ingewikkeld was. Bij alles gaf hij uitleg, en ik probeerde het daarna zelf te snappen. Als iets te moeilijk was, koos ik een alternatief dat ik wel begreep.
Claude heeft ook de afmetingen uit mijn model gemeten om de schijven juist te plaatsen, en hij heeft mijn textures kleiner gemaakt. Het 3D-model heb ik zelf gemaakt met behulp van een YouTube-tutorial. Voor de textures volgde ik instructies van Claude.

## Screencast

Zie de map `screencast/`.
