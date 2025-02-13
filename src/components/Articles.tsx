import { motion } from "framer-motion";

interface Article {
  title: string;
  excerpt: string;
  link: string;
}

const articles: Article[] = [
  {
    title:
      "Migrating a Monolithic application to Microservices using the Strangler Fig Pattern and Spring cloud Gateway",
    excerpt:
      "This approach enables a seamless transition to a microservices architecture, allowing for greater flexibility, scalability, and maintainability, while minimizing downtime and disruptions to the overall system.",
    link: "https://medium.com/@israelmathusse451/migrating-a-monolithic-application-to-microservices-using-the-strangler-fig-pattern-and-spring-71cfca98d047",
  },
  {
    title: "Ensuring Clean Data: Custom Validators in Spring Boot",
    excerpt:
      "By leveraging custom validators, developers can write more robust and maintainable code, reducing errors and improving overall data quality.",
    link: "https://medium.com/@israelmathusse451/ensuring-clean-data-custom-validators-in-spring-boot-30b0aea28033",
  },
  {
    title: "Leveraging BPM for Effective Knowledge Management",
    excerpt:
      "By integrating BPM with knowledge management, organizations can unlock the full potential of their collective expertise, driving innovation and competitiveness.",
    link: "https://medium.com/@israelmathusse451/leveraging-bpm-for-effective-knowledge-management-890d394147d1",
  },
];

export default function Articles() {
  return (
    <div className="bg-gradient-to-br from-vibrant-blue to-vibrant-purple text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-white">
            Published Articles
          </h1>
          <div className="grid gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-vibrant-blue">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vibrant-purple hover:underline"
                >
                  Read on Medium
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
