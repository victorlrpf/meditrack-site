# MediTrack — site de divulgação

Landing page em React + Vite, pronta para a Vercel.

## Rodar local

```bash
npm install
npm run dev
```

## Colocar o app para download

1. Gere o APK do app (no projeto do MediTrack):
   ```bash
   eas build -p android --profile preview
   ```
   (no `eas.json`, o perfil `preview` deve ter `"android": { "buildType": "apk" }`)
2. Baixe o `.apk` gerado e salve como `public/downloads/meditrack.apk`.
3. Pronto: o botão "Baixar para Android" já aponta para `/downloads/meditrack.apk`.

Prefere hospedar em outro lugar (GitHub Releases, etc.)? Edite `DOWNLOAD_URL` em `src/config.js`.

## Publicar na Vercel

- Pelo painel: importe o repositório (framework **Vite** é detectado sozinho), build `npm run build`, saída `dist`.
- Ou pela CLI: `npx vercel --prod`.
