import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";

const DetailQuiz = (props) => {
    const params = useParams();

    const quizID = params.id;

    useEffect(() => {
        fetchQuestions();
    }, [quizID]);
    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizID);
        console.log(res);
    };
    console.log(params);
    return <div className="detail-quiz-container">Quiz detail</div>;
};

export default DetailQuiz;
