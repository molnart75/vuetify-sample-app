# CodeCraft Céges Weboldal - Projekt Összefoglaló

## Az elkészült projekt

Egy teljes körű Vuetify 3 alapú céges weboldalt készítettem egy informatikai fejlesztő cég számára, amely egyben bemutatja a Vuetify komponensek használatát is. A weboldal modern, reszponzív designnal rendelkezik, és támogatja a sötét és világos téma váltását is.

## Főbb jellemzők

1. **Teljes Vuetify 3 integráció**
   - A Material Design alapú komponenskönyvtár minden lehetőségét kihasználtuk
   - Reszponzív design minden képernyőméretre

2. **Rugalmas layout rendszer**
   - Kétféle layout: egyhasábos és kéthasábos oldalsávval
   - Vuetify grid rendszerére épített elrendezés

3. **Témaváltás**
   - Sötét és világos téma között váltási lehetőség
   - A beállítás tárolása localStorage-ban

4. **Pinia állapotkezelés**
   - Jól strukturált store modulok
   - Különválasztott üzleti logika

5. **Mockolt API és json-server**
   - Dinamikus adatok kezelése json-server segítségével
   - Szerveroldali rendezés, szűrés és lapozás szimulálása

6. **TypeScript támogatás**
   - Szigorú típusdefiníciók
   - Jobb kódminőség és fejlesztői élmény

## Oldalak és funkciók

### Kezdőoldal
- Hero slider látványos háttérképekkel és call-to-action gombokkal
- Erősségek szekció, amely a cég előnyeit mutatja be
- Legutóbbi projektek kártyás megjelenítése
- Animált statisztika számláló
- Hírlevél feliratkozási form GDPR elfogadással

### Projektek oldal
- Két oszlopos elrendezés oldalsávval 
- A projektek szerveroldali táblázatban jelennek meg
- Keresés, szűrés, lapozás és rendezés funkciók
- Részletes projekt oldal minden projekthez

### Rólunk oldal
- A cég története és küldetése
- Idővonalas történet megjelenítés
- Értékek és víziók bemutatása
- Csapattagok bemutató kártyákkal

### Árak oldal
- Négy különböző árazási terv áttekinthető módon
- Gyakran Ismételt Kérdések szekció
- Call-to-action a kapcsolatfelvételhez

### Kapcsolat oldal
- Részletes kapcsolatfelvételi űrlap
- Térképes elhelyezkedés
- Nyitvatartási információk
- Különböző kapcsolati csatornák

## Technikai megoldások

- **Vuetify 3 komponenskönyvtár** használata a modern UI elemekhez
- **Vue 3 Composition API** a komponensek logikájának szervezéséhez
- **Pinia store** az alkalmazás állapotának kezeléséhez
- **Vue Router** az oldalak közötti navigációhoz
- **json-server** a backend API szimulálásához
- **SCSS** a testreszabott stílusokhoz
- **TypeScript** a típusbiztonsághoz

## Alkalmazott Vuetify komponensek

- v-app, v-container, v-row, v-col - Alapvető layout elemek
- v-card - Tartalom megjelenítés
- v-app-bar, v-navigation-drawer - Navigáció
- v-carousel - Slider a kezdőoldalon
- v-data-table-server - Szerveroldali adattáblázat
- v-form, v-text-field, v-select - Űrlapok
- v-chip, v-badge - Kiegészítő információk
- v-expansion-panels - Nyitható-zárható panelek
- v-timeline - Idővonalas megjelenítés
- v-dialog - Modal ablakok
- v-theme-provider - Téma kezelés

## Továbbfejlesztési lehetőségek

- Valós backend API integrálása
- Többnyelvű támogatás (i18n)
- Admin felület a tartalom kezeléséhez
- Blog aloldal
- Animációk bővítése
- SEO optimalizálás
- Teljesítmény optimalizálás

## Tanulási lehetőségek a projektben

Ez a projekt kiváló példaként szolgál a Vuetify komponensek használatára, valamint a Vue.js modern fejlesztési gyakorlataira. Különösen hasznos lehet megtanulni:

1. A Composition API használatát
2. A Pinia store kezelését
3. A Vuetify komponensek kombinálását
4. Reszponzív webdesign technikákat
5. A TypeScript és Vue.js integrációját
6. Szerveroldali adatok kezelését és szimulálását
