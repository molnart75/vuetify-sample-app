# CodeCraft Céges Weboldal

Ez a projekt egy Vuetify 3 alapú céges weboldal, amely példaként szolgál a Vuetify komponensek használatára. A weboldal egy informatikai fejlesztő cég számára készült, és tartalmaz dinamikus adatokat, amelyeket a json-server szolgáltat.

## Funkciók

- Vuetify 3 komponensek használata
- Sötét és világos téma váltási lehetőség
- Két különböző layout (egyhasábos és kéthasábos oldalsávval)
- Dinamikus adatok kezelése json-server segítségével
- Reszponzív design minden eszközhöz
- TypeScript támogatás
- SCSS stílusok

## Oldalak

1. **Kezdőoldal** - Slider, erősségek, legutóbbi projektek, hírlevél feliratkozás, statisztikák
2. **Projektek** - Szűrhető, kereshető és rendezhető projektlista szerveroldali táblázattal
3. **Rólunk** - A cég története, küldetése és csapata
4. **Árak** - Árazási tervek és GYIK
5. **Kapcsolat** - Kapcsolatfelvételi űrlap és térképes nézet

## Telepítés

1. Klónozd le a repót:
   ```bash
   git clone <repository-url>
   cd vuetify-corporate-website
   ```

2. Telepítsd a függőségeket:
   ```bash
   npm install
   # vagy
   yarn install
   # vagy
   pnpm install
   ```

3. Indítsd el a JSON szervert a háttérben:
   ```bash
   npm run serve:api
   # vagy
   yarn serve:api
   # vagy
   pnpm serve:api
   ```

4. Indítsd el a fejlesztői szervert:
   ```bash
   npm run dev
   # vagy
   yarn dev
   # vagy
   pnpm dev
   ```

5. Nyisd meg a böngészőben: http://localhost:3000

## API útvonalak

A JSON szerver a következő végpontokat szolgálja ki:

- `GET /api/projects` - Lista az összes projektről
- `GET /api/projects/:id` - Egy specifikus projekt adatai
- `GET /api/strengths` - A cég erősségeinek listája
- `GET /api/slides` - A slider tartalmak
- `GET /api/stats` - A cég statisztikái
- `GET /api/team` - A csapattagok adatai
- `GET /api/pricing` - Árazási tervek

## Projekt szerkezet

```
vuetify-corporate-website/
├── public/                # Statikus fájlok
├── src/
│   ├── components/        # Vue komponensek
│   │   ├── about/         # "Rólunk" oldal komponensei
│   │   ├── contact/       # Kapcsolat oldal komponensei
│   │   ├── home/          # Kezdőoldal komponensei
│   │   └── pricing/       # Árak oldal komponensei
│   ├── layouts/           # Layout komponensek
│   ├── pages/             # Oldal komponensek
│   ├── plugins/           # Vue pluginek
│   ├── router/            # Vue Router konfiguráció
│   ├── stores/            # Pinia állapotkezelők
│   └── styles/            # SCSS stílusok
├── db.json                # JSON szerver adatbázis
├── json-server.js         # JSON szerver konfiguráció
└── package.json           # Projekt konfiguráció
```

## Fejlesztői útmutató

### Új komponens létrehozása

1. Hozz létre egy új Vue fájlt a megfelelő mappában
2. Importáld a szükséges függőségeket
3. Írd meg a komponens kódját (template, script, style)
4. Regisztráld a komponenst a megfelelő oldalon vagy szülő komponensben

### Új oldal létrehozása

1. Hozz létre egy új Vue fájlt a `pages` mappában
2. Állítsd be a layout-ot a defineOptions segítségével:
   ```js
   defineOptions({
     layout: 'default' // vagy 'sidebar'
   })
   ```
3. Importáld a szükséges komponenseket
4. Építsd fel az oldalt a megfelelő szekciókkal

### Téma testreszabása

A téma színek és egyéb beállítások a `src/plugins/vuetify.ts` fájlban találhatók. Itt módosíthatod a light és dark témák színeit és egyéb tulajdonságait.

## Build folyamat

A produkciós verzió elkészítése:

```bash
npm run build
# vagy
yarn build
# vagy
pnpm build
```

A build eredménye a `dist` mappában lesz elérhető, amely statikusan hosztolható bármely szerveren.

## További fejlesztési lehetőségek

- Felhasználói hitelesítés és admin felület implementálása
- Blogrendszer hozzáadása
- Többnyelvű támogatás i18n segítségével
- E-commerce funkciók implementálása
- Projektekhez galéria hozzáadása
- Továbbfejlesztett animációk és átmenetek

## Licensz

MIT
