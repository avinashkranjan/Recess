import React,{useState,useEffect} from 'react';
import { db, auth } from "../firebase";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Logo from "../assets/logo.png";
import { Button, TextField } from "@material-ui/core";

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

function Login() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
    const [modalStyle] = React.useState(getModalStyle);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            // User Logged In ...
            console.log(authUser);
            setUser(authUser);
          } else {
            //user Logged Out ...
            setUser(null);
          }
        });
        return () => {
          unsubscribe();
        };
      }, [user, username]);
    
      useEffect(() => {
        db.collection("posts")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) => {
            setPosts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                post: doc.data(),
              }))
            );
          });
      }, []);
    
      const signIn = (event) => {
        event.preventDefault();
    
        auth
          .signInWithEmailAndPassword(email, password)
          .catch((error) => alert(error.message));
      };
    return (
      user == null ? 
      <>
          <div style={modalStyle} className={classes.paper}>
              <form className="app__signup" noValidate autoComplete="off">
                  <center>
                  <img className="app__headerImage" src={Logo} alt="logo" />
                  </center>
                  <br />
                  <TextField
                  id="email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  />{" "}
                  <br />
                  <TextField
                  id="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outlined"
                  />{" "}
                  <br />
                  <Button
                  type="submit"
                  onClick={signIn}
                  variant="contained"
                  color="primary"
                  className="login__button"
                  >
                  Sign In
                  </Button>
              </form>
              </div>
      </>:<><Button
                  type="submit"
                  onClick={event => window.location.href='/'}
                  variant="contained"
                  color="primary"
                  >
                  Proceed to Homepage
                  </Button></>
    )
}

export default Login
