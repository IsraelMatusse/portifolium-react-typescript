import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-10">
      <Card>
        <CardHeader>
          <CardTitle>Sobre Mim</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            My name is Israel Mateus Matusse. I'm 23 years old and passionate about software
            development. <br />
            My journey as a developer started at the university, where I learned the basics of
            programming and was exposed to different programming languages, <br />
            such as C#, Java, JavaScript, PHP, CSS, and HTML. <br />I graduated in Engineering of
            Technologies and Information Systems.
          </p>

          <p>
            in 2021 I transitioned into the professional sphere, where I am currently engaged in the
            dynamic field of technology. <br />
            As a Programmer Analyst, I primarily focus on backend development, leveraging
            technologies such as Spring Boot, Node Js, react Js and many others. <br />
            My journey in the tech industry has been marked by continuous learning, and my
            dedication to mastering new skills and technologies remains unwavering. <br />
            My commitment to growth and innovation is a driving force as I navigate the
            ever-evolving landscape of software development.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
