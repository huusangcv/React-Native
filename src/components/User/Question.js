import _ from "lodash";
const Question = (props) => {
    const { dataQuiz, index } = props;
    console.log("data quiz", dataQuiz);
    if (_.isEmpty(dataQuiz)) {
        return <></>;
    }
    return (
        <>
            {dataQuiz.image && (
                <div>
                    <img
                        src={`data:image/jpeg;base64,${dataQuiz.image}`}
                        alt=""
                        className="q-image"
                    />
                </div>
            )}
            <div className="question">
                Question {index + 1}: {dataQuiz.questionDescription}?
            </div>
            <div className="answer">
                {dataQuiz.answers &&
                    dataQuiz.answers.length > 0 &&
                    dataQuiz.answers.map((a, index) => {
                        return (
                            <div key={`answer-${index}`} className="a-child">
                                <div class="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id={`flexCheckDefault-${index}`}
                                    />
                                    <label
                                        className="form-check-label"
                                        for={`flexCheckDefault-${index}`}
                                    >
                                        {a.description}
                                    </label>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default Question;
