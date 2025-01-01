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
              long_description="personal websites that shows socials, projects, and information about me. created with react and typescript"
              btn_link="https://github.com/bastian-js/bbastian.xyz"
              btn_text="github"
              btn_color="primary"
              btn2_text="read more"
              btn2_link=""
              btn2_color="secondary"
            />
          </div>
          <div className="col">
            <Card
              img_src="anti-crash.png"
              img_alt=""
              title="anti-crash"
              description="system for discord bots"
              long_description="an anti-crash system for discord bots with discord.js v13 or v14. uses webhooks to post the error in a channel but the bot never crashes"
              btn_link="https://github.com/bastian-js/discord-anticrash-v13v14"
              btn_text="github"
              btn_color="primary"
              btn2_text="read more"
              btn2_link=""
              btn2_color="secondary"
            />
          </div>
          <div className="col">
            <Card
              img_src="giveaway_Bot.png"
              img_alt="Giveaway bot"
              title="giveaway bot"
              description="bot to manage giveaways in discord"
              long_description="small giveway bot to manage giveaways in discord. made using discord.js v14"
              btn_link="https://github.com/bastian-js/giveaway-bot"
              btn_text="github"
              btn_color="primary"
              btn2_text="read more"
              btn2_link=""
              btn2_color="secondary"
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
              long_description="basic contact form using php"
              btn_link="https://github.com/bastian-js/php-contact-form"
              btn_text="github"
              btn_color="primary"
              btn2_text="read more"
              btn2_link=""
              btn2_color="secondary"
            />
          </div>
          <div className="col">
            <Card
              img_src="ddf.png"
              img_alt="This website was created using react and vite"
              title="der dümmste fliegt"
              description="small interface for the game (by reved)"
              long_description="interface to play the game 'der dümmste fliegt' by the youtuber reved. just screen share the screen in discord and you can start playing. database with over 150 questions"
              btn_link="https://github.com/bastian-js/ddf"
              btn_text="github"
              btn_color="primary"
              btn2_text="read more"
              btn2_link=""
              btn2_color="secondary"
            />
          </div>
          <div className="col">
            <Card
              img_src="calorie-calc.png"
              img_alt=""
              title="calorie calculator"
              description="basic calculator that calculates calories"
              long_description="calorie calculator that calculates calories. calculates the intake to lose fat, stay the same or gain fat"
              btn_link="https://bbastian.xyz/calories.php"
              btn_text="try it yourself"
              btn_color="primary"
              btn2_text="read more"
              btn2_link=""
              btn2_color="secondary"
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
