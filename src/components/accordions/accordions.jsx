import React, { useState } from "react";
import "./accordions.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useMediaQuery } from "react-responsive";

const Accordions = () => {
  const [moreInfoButton, setMoreInfoButton] = useState(false);
  const mobileDevice = useMediaQuery({ maxWidth: "700px" });

  return (
    <>
      <div className="accordions-main">
        <div className="accordions-column">
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="typography">
                Что мне нужно, чтобы подать заявку на получение учетной записи?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="accordion-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="typography">
                Как работает подписка?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="accordion-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className="typography">
                Что мне нужно, чтобы подать заявку на получение учетной записи?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="accordion-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography className="typography">
                Что мне нужно, чтобы подать заявку на получение учетной записи?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="accordion-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        {moreInfoButton || !mobileDevice ? (
          <div className="accordions-column">
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel5a-content"
                id="panel5a-header"
              >
                <Typography className="typography">
                  What de I need to apply for the account?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accordion-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel6a-content"
                id="panel6a-header"
              >
                <Typography className="typography">
                  Доступен ли заказ еды 24 часа в сутки?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accordion-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel7a-content"
                id="panel7a-header"
              >
                <Typography className="typography">
                  Есть какая-либо скрытая плата?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accordion-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel8a-content"
                id="panel8a-header"
              >
                <Typography className="typography">
                  Что мне нужно, чтобы подать заявку на получение учетной
                  записи?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accordion-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ) : null}
        {mobileDevice ? (
          moreInfoButton ? (
            <div
              className="mobile-accordions-btn"
              onClick={() => setMoreInfoButton((prevState) => !prevState)}
            >
              <div className="mobile-more-btn">Меньше...</div>
              <ArrowDropUpIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
            </div>
          ) : (
            <div
              className="mobile-accordions-btn"
              onClick={() => setMoreInfoButton((prevState) => !prevState)}
            >
              <div className="mobile-more-btn">Больше...</div>
              <ArrowDropDownIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
            </div>
          )
        ) : null}
      </div>
    </>
  );
};

export default Accordions;
