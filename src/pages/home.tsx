import { BlogCard } from "@/components/blog-card";

const posts = [
    {
        date: "12 de Janeiro, 2022",
        title: "A Importância da Diversidade no Recrutamento",
        excerpt: "Entenda por que a diversidade no processo de recrutamento é essencial para empresas que desejam ser competitivas e inovadoras no mercado.",
        author: {
            name: "Carlos Lima",
            role: "Especialista em Diversidade",
            avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg"
        },
        slug: "importancia-da-diversidade-no-recrutamento"
    },
    {
        date: "05 de Fevereiro, 2022",
        title: "Como Reduzir o Viés Inconsciente nas Entrevistas",
        excerpt: "Aprenda técnicas para reduzir o viés inconsciente nas entrevistas de emprego e garantir um processo de seleção mais justo.",
        author: {
            name: "Mariana Oliveira",
            role: "Consultora de RH",
            avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg"
        },
        slug: "reduzir-vies-inconsciente-nas-entrevistas"
    },
    {
        date: "23 de Março, 2022",
        title: "Atraindo Talentos Diversos: Boas Práticas",
        excerpt: "Saiba como atrair talentos diversos para sua empresa e criar um ambiente de trabalho inclusivo desde o processo de seleção.",
        author: {
            name: "Roberto Silva",
            role: "Gerente de Recrutamento",
            avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg"
        },
        slug: "atraindo-talentos-diversos"
    },
    {
        date: "15 de Abril, 2023",
        title: "Estratégias de Inclusão para o Crescimento Empresarial",
        excerpt: "Descubra como estratégias de inclusão podem impulsionar o crescimento e a inovação dentro das empresas.",
        author: {
            name: "Ana Costa",
            role: "Especialista em Inclusão",
            avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg"
        },
        slug: "estrategias-de-inclusao-para-crescimento"
    },
    {
        date: "28 de Junho, 2023",
        title: "Promovendo a Equidade no Ambiente de Trabalho",
        excerpt: "Equidade no local de trabalho vai além da igualdade. Saiba como promover a equidade e garantir oportunidades justas para todos.",
        author: {
            name: "Felipe Martins",
            role: "Coordenador de Diversidade",
            avatarUrl: "https://randomuser.me/api/portraits/men/6.jpg"
        },
        slug: "promovendo-equidade-no-trabalho"
    }
];


export function Home() {
    return (
        <div className="flex items-center justify-center py-20 font-sans">
            <div className="w-[1000px] flex flex-col gap-4 items-center justify-start">
                <header className="w-full space-y-2 border-b pb-6">
                    <h1 className="text-3xl font-bold ">
                        🤝 Melhore a Inclusão e Diversidade no RH
                    </h1>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Explore nosso blog e receba dicas sobre como promover inclusão e diversidade na sua empresa.
                    </p>
                </header>
                <main className="w-full grid grid-cols-2 gap-4">
                    {
                        posts.map(post => (
                            <BlogCard key={post.slug} {...post} />
                        ))
                    }
                </main>
            </div>
        </div>
    )
}