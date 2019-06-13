import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/*
    todo
    -react router
    -inspohttps://musica-react-app.firebaseapp.com/
    -add loader https://www.w3schools.com/howto/howto_css_loader.asp
*/

const key = 'Bs6mF1QczyYX4r588EVp7QGV0kZkVRbR07e1M5yOaO9cJv3BMI';
const secret = '1Lkbt1VjOCxPxEY9X9cb5TRVvNbwnToY3pE0sohN';

const backup = 'SQOzn9QEHYRDlEp3zzansM9aZJhpa3KlWH0YS3DN4t6GYXKw3t';
const secret2 = 'QMXJ3ghKX2SI1OvAcqItoeQnrvJcxsUFQq5o6Wrh'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'));

const getToken  = 'curl -d "grant_type=client_credentials&client_id=SQOzn9QEHYRDlEp3zzansM9aZJhpa3KlWH0YS3DN4t6GYXKw3t&client_secret=QMXJ3ghKX2SI1OvAcqItoeQnrvJcxsUFQq5o6Wrh" https://api.petfinder.com/v2/oauth2/token';
const currentToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjkxYTJhMzMzYzAyM2Q3N2RiYjk5NTYwMzkwNjFjOTZlODlhNzk0Y2I3MTdlNzFiMWRhN2FkNTNlZTY1MzU2Y2Y3MjllZGQ2Y2MxMDlmYjA2In0.eyJhdWQiOiJCczZtRjFRY3p5WVg0cjU4OEVWcDdRR1Ywa1prVlJiUjA3ZTFNNXlPYU85Y0p2M0JNSSIsImp0aSI6IjkxYTJhMzMzYzAyM2Q3N2RiYjk5NTYwMzkwNjFjOTZlODlhNzk0Y2I3MTdlNzFiMWRhN2FkNTNlZTY1MzU2Y2Y3MjllZGQ2Y2MxMDlmYjA2IiwiaWF0IjoxNTYwMzgyMDAxLCJuYmYiOjE1NjAzODIwMDEsImV4cCI6MTU2MDM4NTYwMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.vs1i7myREzT_fsX06KHFecsXh9UtJ69kpz6OIFec2E2TGPDaQQOuV2Ebuvhl_u6QEpsTSg_KT8W_jDaSF9zKlJtFNikvpdp2d0iiAZK6eVTSjxaHGsMGTFF0zLZtWtiP86OePJ94dJBm_JackL6R6rcjqia-jvfLqGW88hTaVS-I7S8_gYJASwILZj4EY1lCR8gUgh1XptlJtJRKWP3UT41vTfLqOWBAYFahLDUmHTB5tv3LerOZKIBAPLocq2aTgd6bR0tWHE3_I1yV4-w1mW9lBeQ69EBop1CZ_PVyhdIWAwy7nXFdidGDw9NPyxab4DOwV74hIMxkeiBqQdfIvw';

