import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Markdown from "react-markdown";
import "../index.css";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export function Post() {
    const { slug } = useParams();
    const [content, setContent] = useState("");

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const response = await fetch(`/content/${slug}.md`);
                if (!response.ok) {
                    throw new Error(`Erro ao carregar o arquivo: ${response.statusText}`);
                }
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error("Erro ao carregar o post:", error);
                setContent("# Post não encontrado");
            }
        };

        fetchMarkdown();
    }, [slug]);

    return (
        <div className="flex items-center justify-center font-sans">
            <div className="w-[1000px] markdown-container prose max-w-none">
                <header className="py-10">
                    <Link to={'/'}>
                        <Button variant={'outline'} className="flex items-center gap-1 ">
                            <ChevronLeft />
                            Voltar
                        </Button>
                    </Link>
                </header>
                <Markdown>{content}</Markdown>
            </div>
        </div>
    );
}
