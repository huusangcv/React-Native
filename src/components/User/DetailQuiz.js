import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";
const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();
    const quizID = params.id;

    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchQuestions();
    }, [quizID]);
    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizID);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answers = [];
                    let questionDescription,
                        image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image;
                        }
                        answers.push(item.answers);
                    });

                    return {
                        questionId: key,
                        answers,
                        questionDescription,
                        image,
                    };
                })
                .value();
            setDataQuiz(data);
        }
    };
    console.log(dataQuiz);
    const handlePrev = () => {
        if (index - 1 < 0) return;
        setIndex(index - 1);
    };
    const handleNext = () => {
        if (dataQuiz && dataQuiz.length > index + 1) setIndex(index + 1);
    };
    return (
        <div className="detail-quiz-container container">
            <div className="row">
                <div className="col-7">
                    <div className="left-content">
                        <div className="title">
                            Quiz {quizID}: {location?.state?.quizTitle}
                        </div>
                        <hr />
                        <div className="q-body">
                            <img src="" alt="" />
                        </div>
                        <div className="q-content">
                            <Question
                                index={index}
                                dataQuiz={
                                    (dataQuiz &&
                                        dataQuiz.length > 0 &&
                                        dataQuiz[index]) ||
                                    []
                                }
                            />
                        </div>
                        <footer className="footer d-flex gap-3 justify-content-center">
                            <button
                                className="btn btn-secondary"
                                onClick={() => handlePrev()}
                            >
                                Prev
                            </button>
                            <button
                                className="btn btn-primary ml-3"
                                onClick={() => handleNext()}
                            >
                                Next
                            </button>
                        </footer>
                    </div>
                </div>
                <div className="col-3">
                    <div className="right-content">Count down</div>
                </div>
            </div>
        </div>
    );
};

export default DetailQuiz;
