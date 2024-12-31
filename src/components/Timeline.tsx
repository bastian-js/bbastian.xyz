const Timeline = () => {
  const timelineData = [
    {
      date: "April 2022 - Nov 2023",
      title: "Started with HTML, CSS, JS, Discord.js",
      description:
        "I started building my very first websites mostly for my Discord bots and personal websites. I learned how to build my own Discord bots with Discord.js and JavaScript.",
    },
    {
      date: "Jan 2023 - Nov 2023",
      title: "Giveaway Bot",
      description:
        "Using Discord.js, I built an open-source giveaway bot that could manage Discord giveaways. You could handle your giveaways using /-commands. The bot is still on GitHub. In the README, there is an instruction on how to install your own instance of the bot.",
    },
    {
      date: "September 2020 - Present",
      title: "C#, .NET MAUI",
      description:
        "Through school, I started with GitHub, project management, and learned C# & .NET MAUI, which I'm still doing now.",
    },
  ];

  return (
    <div className="container my-5">
      <div className="d-flex flex-column align-items-center">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center text-center mb-5"
          >
            <div className="text-primary mb-2">{item.date}</div>
            <h5 className="text-uppercase fw-bold">{item.title}</h5>
            <p className="text">{item.description}</p>
            {index < timelineData.length - 1 && (
              <div
                className="border-start border-2"
                style={{ height: "50px" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
