import React, { useState, useEffect } from 'react';
import articlesData from '../../../public/data/articles/travel-articles.json'
import Image from "next/image";
import Link from "next/link";

interface Article {
    id: number;
    image: string;
    tag: string;
    date: string;
    author: string;
    title: string;
}

const Skeleton: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-80 w-full rounded overflow-hidden animate-pulse bg-light_gray">
            <div className="h-20 w-20 mr-4 bg-gray-300 animate-pulse"></div>
            <div className="flex-1">
                <div className="h-4 w-24 mb-2 bg-gray-300 animate-pulse"></div>
                <div className="h-4 w-32 bg-gray-300 animate-pulse"></div>
            </div>
        </div>
    );
};

const TravelArticles: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        setArticles(articlesData.articles);
        setLoading(false);

    }, []);

    return (
        <div className="container mx-auto py-8 px-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-dark_blue">Travel Articles</h2>
                <Link className="text-dark_blue" href="/blog">
                    See All
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {loading ? (
                    <>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </>
                ) : (
                    articles.map((article: Article) => (
                        <div key={article.id} className="bg-white rounded-lg">
                            <div className="relative">
                                <Image src={`${article.image}`} alt={article.title} width='400' height='300' className="w-full h-80 object-cover rounded-t-lg" />
                                <div className="text-xs text-dark_blue mb-1 absolute top-2 left-2 bg-white px-2 py-1 rounded-xl">{article.tag}</div>
                            </div>
                            <div className="p-4">
                                <div className="flex flex-row">
                                    <div className="text-xs text-dark_blue mb-1">{article.date} | {article.author}</div>
                                </div>
                                <h3 className="text-lg font-semibold text-dark_blue mb-2">{article.title}</h3>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TravelArticles;
