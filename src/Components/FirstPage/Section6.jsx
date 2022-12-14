import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import "../../styles/FirstPage/section6.scss";
import ButtonEmail from "../../Components/FirstPage/ButtonEmail";

const Section6 = () => {
  return (
    <div className="section-accordion bg-black">
      <h2>Frequently Asked Questions</h2>
      <Accordion style={{ marginBottom: "10px" }}>
        <AccordionSummary
          style={{
            backgroundColor: "#303030",
            borderBottom: "1px solid black",
            color: "white",
          }}
          expandIcon={<AddIcon style={{ fontSize: "36px", color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: "26px" }}>What is Netflix</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#303030", color: "white" }}
        >
          <Typography style={{ fontSize: "26px", padding: "30px " }}>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices. You can watch as much as
            you want, whenever you want without a single commercial – all for
            one low monthly price. There's always something new to discover and
            new TV shows and movies are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion style={{ marginBottom: "10px" }}>
        <AccordionSummary
          style={{
            backgroundColor: "#303030",
            borderBottom: "1px solid black",
            color: "white",
          }}
          expandIcon={<AddIcon style={{ fontSize: "36px", color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: "26px" }}>
            How much does Netflix cost?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            backgroundColor: "#303030",

            color: "white",
          }}
        >
          <Typography
            style={{ fontSize: "26px", padding: "30px ", color: "white" }}
          >
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from
            EUR7.99 to EUR11.99 a month. No extra costs, no contracts.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion style={{ marginBottom: "10px" }}>
        <AccordionSummary
          style={{
            backgroundColor: "#303030",
            borderBottom: "1px solid black",
            color: "white",
          }}
          expandIcon={<AddIcon style={{ fontSize: "36px", color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: "26px" }}>
            Where can I watch?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            backgroundColor: "#303030",

            color: "white",
          }}
        >
          <Typography style={{ fontSize: "26px", padding: "30px " }}>
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web at netflix.com from your personal computer or
            on any internet-connected device that offers the Netflix app,
            including smart TVs, smartphones, tablets, streaming media players
            and game consoles. You can also download your favorite shows with
            the iOS, Android, or Windows 10 app. Use downloads to watch while
            you're on the go and without an internet connection. Take Netflix
            with you anywhere.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion style={{ marginBottom: "10px" }}>
        <AccordionSummary
          style={{
            backgroundColor: "#303030",
            borderBottom: "1px solid black",
            color: "white",
          }}
          expandIcon={<AddIcon style={{ fontSize: "36px", color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: "26px" }}>How do I cancel?</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            backgroundColor: "#303030",

            color: "white",
          }}
        >
          <Typography style={{ fontSize: "26px", padding: "30px " }}>
            Netflix is flexible. There are no pesky contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion style={{ marginBottom: "10px" }}>
        <AccordionSummary
          style={{
            backgroundColor: "#303030",
            borderBottom: "1px solid black",
            color: "white",
          }}
          expandIcon={<AddIcon style={{ fontSize: "36px", color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: "26px" }}>
            What can I watch on Netflix?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            backgroundColor: "#303030",

            color: "white",
          }}
        >
          <Typography style={{ fontSize: "26px", padding: "30px " }}>
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion style={{ marginBottom: "10px" }}>
        <AccordionSummary
          style={{
            backgroundColor: "#303030",
            borderBottom: "1px solid black",
            color: "white",
          }}
          expandIcon={<AddIcon style={{ fontSize: "36px", color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: "26px" }}>
            Is Netflix good for kids?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            backgroundColor: "#303030",
            color: "white",
          }}
        >
          <Typography style={{ fontSize: "26px", padding: "30px " }}>
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and movies
            in their own space. Kids profiles come with PIN-protected parental
            controls that let you restrict the maturity rating of content kids
            can watch and block specific titles you don’t want kids to see.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginBottom: "10px" }}>
        <AccordionSummary
          style={{
            backgroundColor: "#303030",
            borderBottom: "1px solid black",
            color: "white",
          }}
          expandIcon={<AddIcon style={{ fontSize: "36px", color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: "26px" }}>
            Why am I seeing this language?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            backgroundColor: "#303030",
            color: "white",
          }}
        >
          <Typography style={{ fontSize: "26px", padding: "30px " }}>
            Your browser preferences determine the language shown here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
};

export default Section6;
