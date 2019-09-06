import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";

import "./App.scss";

const useStyles = makeStyles(theme => ({
  fab: {
    backgroundColor: "hsl(188, 100%, 85%)",
    color: "dark",
    fontSize: 12,
    height: 24,
    width: 80,
    fontFamily: "Noto Sans JP",
    borderRadius: 100,
    textTransform: "lowercase"
  },
  fab1: {
    backgroundColor: "#ffee58",
    color: "dark",
    fontSize: 12,
    height: 24,
    width: 80,
    fontFamily: "Noto Sans JP",
    borderRadius: 100,
    textTransform: "lowercase"
  },
  fab2: {
    backgroundColor: "#4caf50",
    color: "dark",
    fontSize: 12,
    height: 24,
    width: 80,
    fontFamily: "Noto Sans JP",
    borderRadius: 100,
    textTransform: "lowercase"
  },
  card: {
    width: 350,
    minHeight: 410,
    borderTop: "5px solid blue",
    padding: 0,
    marginRight: 20,
    marginBottom: 20,
    transition: "0.3s",
    boxShadow: "0 8 40 -12 rgba(0, 0, 0, 0.3)",
    overflowX: "hidden",
    backgroundColor: "hsl(200, 10%, 94%)",

    " &:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0, 0, 0, 0.3)"
    }
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className="content">
        <Card className={classes.card}>
          <CardContent className="card__content">
            <Paper className="card__header">
              <div className="card__content__date">12 of September 2019</div>

              <div className="card__content__time-of-change">
                <i className="far fa-clock" /> 12:00 - 15:00 AM
                <div className="card__content__status">
                  <Fab
                    variant="extended"
                    aria-label="delete"
                    className={classes.fab}
                  >
                    submitted
                  </Fab>
                </div>
              </div>
            </Paper>

            <Divider light />

            <div className="card__content__work-place">
              <i className="far fa-building" />
              Hepatology organizations‎ ‎
            </div>

            <Paper>
              <h4>Required Skills</h4>
              <div className="card__content__skills">
                <ul>
                  <li>Medical coding</li>
                  <li>Patioent flow</li>
                  <li>Computer</li>
                </ul>
                <ul>
                  <li>Medical coding</li>
                  <li>Patioent flow</li>
                  <li>Computer</li>
                </ul>
              </div>
            </Paper>

            <div className="card__content__info">
              <div className="card__content__info__author">
                <i className="far fa-user" />
                Bruce Willis
              </div>
              <div className="card__content__info__creation-date">
                <i className="far fa-calendar" />
                10.09.19
              </div>
            </div>

            <Divider light />

            <div className="card__content__first-accepted">
              <div className="card__content__first-accepted__name">
                <i className="far fa-check-circle" />
                John Snow accepted first
              </div>
              <div className="card__content__first-accepted__time">
                <i class="fas fa-history" />6 minute ago
              </div>
              <div className="card__content__first-accepted__recipients">
                14 recipients
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent className="card__content">
            <Paper className="card__header">
              <div className="card__content__date">28 of July 2019</div>

              <div className="card__content__time-of-change">
                <i className="far fa-clock" /> 12:00 - 15:00 AM
                <div className="card__content__status">
                  <Fab
                    variant="extended"
                    aria-label="delete"
                    className={classes.fab1}
                  >
                    pending
                  </Fab>
                </div>
              </div>
            </Paper>

            <Divider light />

            <div className="card__content__work-place">
              <i className="far fa-building" />
              Genetics organizations‎ ‎
            </div>

            <Paper>
              <h4>Required Skills</h4>
              <div className="card__content__skills">
                <ul>
                  <li>Medical coding</li>
                  <li>Patioent flow</li>
                  <li>Computer</li>
                </ul>
                <ul>
                  <li>Scheduling</li>
                  <li>Collaboration</li>
                  <li>Computer</li>
                </ul>
              </div>
            </Paper>

            <div className="card__content__info">
              <div className="card__content__info__author">
                <i className="far fa-user" />
                Ivan Ivanov
              </div>
              <div className="card__content__info__creation-date">
                <i className="far fa-calendar" />
                12.12.19
              </div>
            </div>

            <Divider light />

            <div className="card__content__first-accepted">
              <div className="card__content__first-accepted__name">
                <i className="far fa-check-circle" />
                John Snow accepted first
              </div>
              <div className="card__content__first-accepted__time">
                <i class="fas fa-history" />
                10 minute ago
              </div>
              <div className="card__content__first-accepted__recipients">
                18 recipients
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent className="card__content">
            <Paper className="card__header">
              <div className="card__content__date">1 of June 2019</div>

              <div className="card__content__time-of-change">
                <i className="far fa-clock" /> 13:00 - 16:00 AM
                <div className="card__content__status">
                  <Fab
                    variant="extended"
                    aria-label="delete"
                    className={classes.fab2}
                  >
                    paid
                  </Fab>
                </div>
              </div>
            </Paper>

            <Divider light />

            <div className="card__content__work-place">
              <i className="far fa-building" />
              Hospice
            </div>

            <Paper>
              <h4>Required Skills</h4>
              <div className="card__content__skills">
                <ul>
                  <li>Medical coding</li>
                  <li>Patioent flow</li>
                  <li>Computer</li>
                </ul>
                <ul>
                  <li>Medical coding</li>
                  <li>Customer service</li>
                  <li>Computer</li>
                </ul>
              </div>
            </Paper>

            <div className="card__content__info">
              <div className="card__content__info__author">
                <i className="far fa-user" />
                Bruce Willis
              </div>
              <div className="card__content__info__creation-date">
                <i className="far fa-calendar" />
                10.09.19
              </div>
            </div>

            <Divider light />

            <div className="card__content__first-accepted">
              <div className="card__content__first-accepted__name">
                <i className="far fa-check-circle" />
                John Snow  accepted first
              </div>
              <div className="card__content__first-accepted__time">
                <i class="fas fa-history" />
                20 minute ago
              </div>
              <div className="card__content__first-accepted__recipients">
                34 recipients
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Fragment>
  );
};

export default App;
