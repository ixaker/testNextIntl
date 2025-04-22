import Link from "next/link";

const translations = {
  en: { welcome: "Welcome to the About!" },
  ru: { welcome: "Добро пожаловать на о нас!" },
  uk: { welcome: "Ласкаво просимо на про нас!" },
};

const About = async ({ params }: { params: { locale: string } }) => {
  const locale = params.locale as keyof typeof translations;
  const t = translations[locale] || translations.en;
  return (
    <>
      <h1>{t.welcome}</h1>

      <ul>
        <li>
          <Link href={"/about/1"}>Новость номер 1</Link>
        </li>
        <li>
          <Link href={"/about/2"}>Новость номер 2</Link>
        </li>
        <li>
          <Link href={"/about/3"}>Новость номер 3</Link>
        </li>
        <li>
          <Link href={"/about/4"}>Новость номер 4</Link>
        </li>
        <li>
          <Link href={"/about/5"}>Новость номер 5</Link>
        </li>
        <li>
          <Link href={"/about/6"}>Новость номер 6</Link>
        </li>
      </ul>
    </>
  );
};

export default About;
