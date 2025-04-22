// app/[locale]/page.tsx

const translations = {
  en: { welcome: "Welcome to the homepage!" },
  ru: { welcome: "Добро пожаловать на главную!" },
  uk: { welcome: "Ласкаво просимо на головну!" },
};

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as keyof typeof translations;
  const t = translations[locale] || translations.en;

  return (
    <div>
      <h1>{t.welcome}</h1>
      <p>Язык: {locale}</p>
    </div>
  );
}
