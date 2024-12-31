import Header from "./components/Header";
import Card_AboutMe from "./components/Card_AboutMe.tsx";
import Timeline from "./components/Timeline.tsx";
import Footer from "./components/Footer.tsx";
import Card from "./components/Card.tsx";

function App() {
  return (
    <body>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Card_AboutMe
              title="about me"
              description="hi, i'm bastian, a 19 year old student from austria. i'm interested in programming, web development and design. i'm currently learning javascript/typescript and react. i'm also a big fan of the game minecraft minecraft and i'm playing it since 2017. i'm also a big fan of the game league of legends and i'm playing it since 2023."
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Timeline />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Card
              img_src="website.png"
              img_alt="This website was created using react and vite"
              title="this website"
              description="created with react"
              btn_link="https://github.com/bastian-js/bbastian.xyz"
              btn_text="GitHub"
              btn_color="primary"
            />
          </div>
          <div className="col">
            <Card
              img_src="anti-crash.png"
              img_alt=""
              title="anti-crash"
              description="system for discord bots"
              btn_link="https://github.com/bastian-js/discord-anticrash-v13v14"
              btn_text="GitHub"
              btn_color="primary"
            />
          </div>
          <div className="col">
            <Card
              img_src="giveaway_Bot.png"
              img_alt="Giveaway bot"
              title="giveaway bot"
              description="bot to manage giveaways in discord"
              btn_link="https://github.com/bastian-js/giveaway-bot"
              btn_text="GitHub"
              btn_color="primary"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <Card
              img_src="contact-form.png"
              img_alt="Contact form"
              title="php contact form"
              description="basic contact form using php"
              btn_link="https://github.com/bastian-js/php-contact-form"
              btn_text="GitHub"
              btn_color="primary"
            />
          </div>
          <div className="col">
            <Card
              img_src="ddf.png"
              img_alt="This website was created using react and vite"
              title="der dümmste fliegt"
              description="small interface for the game (by reved)"
              btn_link="https://github.com/bastian-js/ddf"
              btn_text="GitHub"
              btn_color="primary"
            />
          </div>
          <div className="col">
            <Card
              img_src="calorie-calc.png"
              img_alt="This website was created using react and vite"
              title="calorie calculator"
              description="basic calculator that calculates calories"
              btn_link="https://bbastian.xyz/calories.php"
              btn_text="Try it yourself"
              btn_color="primary"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </body>
  );
}

export default App;
