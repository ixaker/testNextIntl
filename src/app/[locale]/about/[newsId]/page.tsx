// app/news/[newsId]/page.tsx
import { FC } from "react";

interface PageProps {
  params: {
    newsId: string;
  };
}

const NewsPage: FC<PageProps> = ({ params }) => {
  console.log("params", params);

  const numberNews = params.newsId;

  return (
    <div>
      <p className="text-2xl text-black">Новость номер: {numberNews}</p>
    </div>
  );
};

export default NewsPage;
