import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDataQuiz, postSubmitQuiz } from "../../services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";
import ModalResult from "./ModalResult";
const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();
    const quizId = +params.id;

    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);

    const [isShowModalResult, setIsShowModalResult] = useState(false);
    const [dataModalResult, setDataModalResult] = useState({});
    useEffect(() => {
        fetchQuestions();
    }, [quizId]);
    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
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
                        item.answers.isSelected = false;
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
    const handlePrev = () => {
        if (index - 1 < 0) return;
        setIndex(index - 1);
    };
    const handleNext = () => {
        if (dataQuiz && dataQuiz.length > index + 1) setIndex(index + 1);
    };

    const handleCheckbox = (answerId, questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz);
        let question = dataQuizClone.find(
            (item) => +item.questionId === +questionId
        );

        if (question && question.answers) {
            let b = question.answers.map((item) => {
                if (item.id === +answerId) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            });
            question.answers = b;
        }

        let index = dataQuizClone.findIndex(
            (item) => +item.questionId === +questionId
        );
        if (index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone);
        }
    };

    const handleFinishQuiz = async () => {
        let payload = {
            quizId: +quizId,
            answers: [],
        };
        let answers = [];
        if (dataQuiz && dataQuiz.length > 0) {
            dataQuiz.forEach((question) => {
                let questionId = +question.questionId;
                let userAnswerId = [];

                question.answers.forEach((a) => {
                    if (a.isSelected === true) {
                        userAnswerId.push(a.id);
                    }
                });

                //todo: userAnswerId
                answers.push({
                    questionId: +questionId,
                    userAnswerId,
                });
            });
            payload.answers = answers;

            //Submit API
            console.log("Final payload", payload);
            let res = await postSubmitQuiz(payload);
            console.log(res);
            if (res && res.EC === 0) {
                setDataModalResult({
                    countCorrect: res.DT.countCorrect,
                    countTotal: res.DT.countTotal,
                    quizData: res.DT.quizData,
                });
                setIsShowModalResult(true);
            } else {
                alert("somthing wrongs");
            }
        }
    };
    return (
        <div className="detail-quiz-container container">
            <div className="row">
                <div className="col-7">
                    <div className="left-content">
                        <div className="title">
                            Quiz {quizId}: {location?.state?.quizTitle}
                        </div>
                        <hr />
                        <div className="q-body">
                            <img src="" alt="" />
                        </div>
                        <div className="q-content">
                            <Question
                                index={index}
                                handleCheckbox={handleCheckbox}
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
                            <button
                                className="btn btn-warning ml-3"
                                onClick={() => handleFinishQuiz()}
                            >
                                Finish
                            </button>
                        </footer>
                    </div>
                </div>
                <div className="col-3">
                    <div className="right-content">Count down</div>
                </div>
                <ModalResult
                    show={isShowModalResult}
                    setShow={setIsShowModalResult}
                    dataModalResult={dataModalResult}
                />
            </div>
        </div>
    );
};

export default DetailQuiz;
