import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiServices";
import "./ListQuiz.scss";
import { useNavigate } from "react-router-dom";
const ListQuiz = (props) => {
    const navigate = useNavigate();

    const [arrQuiz, setArrQuiz] = useState([]);
    useEffect(() => {
        getQuizData();
    }, []);

    const getQuizData = async () => {
        const res = await getQuizByUser();
        if (res && res.EC === 0) {
            setArrQuiz(res.DT);
            console.log(res);
        }
    };

    return (
        <div className="list-quiz-container">
            <div className="container">
                <div className="row row-cols-4">
                    {arrQuiz &&
                        arrQuiz.length > 0 &&
                        arrQuiz.map((quiz, index) => {
                            return (
                                <div className="col" key={`${index}-quiz`}>
                                    <div
                                        className="card"
                                        style={{ width: "18rem" }}
                                    >
                                        <img
                                            src={`data:image/jpeg;base64, ${quiz.image}`}
                                            className="card-img-top"
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {index + 1}
                                            </h5>
                                            <p className="card-text">
                                                {quiz.description}
                                            </p>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() =>
                                                    navigate(`/quiz/${quiz.id}`)
                                                }
                                            >
                                                Start Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>

                {arrQuiz && arrQuiz.length === 0 && (
                    <div>You don't have anything quiz!!</div>
                )}
            </div>
        </div>
    );
};

export default ListQuiz;
