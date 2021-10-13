import "./card.scss";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(() => ({
    color:'crimson',

    margin: 0,
    padding: '2px',
    textAlign: 'center',
    boxShadow: 'none',

    "&:hover": {
        background:'rgba(240, 92, 121)',
        color:'white',
        border: '1px solid black',
    }
}));



export default function Skills() {

    const data = [
        {
            id: 1,
            name: "Layout",
            img1:
                "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
            img2:
                "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
            img3:
                "https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg",
            desc1:
                "Flexbox",
            desc2:
                "CSS Grid",
            desc3:
                "CSS Frameworks",
        },
        {
            id: 2,
            name: "Frontend",
            img1:
                "https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg",
            img2:
                "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
            img3:
                "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
            desc1:
                "React Hooks",
            desc2:
                "React Router",
            desc3:
                "Redux",

            featured: true,
        },
        {
            id: 3,
            name: "Backend",
            img1:
                "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
            img2:
                "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
            img3:
                "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
            desc1:
                "Node JS",
            desc2:
                "Express",
            desc3:
                "MongoDB && Firebase",
        },
    ];

    return (
        <div className="skill" id="skill">
            <h1>Skills</h1>
            <div className="skill-container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                        </div>
                        <div className="center">
                            <Box sx={{flexGrow: 1}}>
                                <Grid container spacing={2}
                                      container
                                      direction="row"
                                      justifyContent="center"
                                      alignItems="center">
                                    <Grid item xs={7}>
                                        <Item>{d.desc1}</Item>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Item>{d.desc2}</Item>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Item>{d.desc3}</Item>
                                    </Grid>
                                </Grid>
                            </Box>

                        </div>
                        <div className="top">
                            <img
                                className="user"
                                src={d.img1}
                                alt=""
                            />
                            <img
                                className="user"
                                src={d.img2}
                                alt=""
                            />
                            <img
                                className="user"
                                src={d.img3}
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}