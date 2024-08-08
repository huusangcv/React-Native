import _ from "lodash";
const Question = (props) => {
    const { dataQuiz, index, handleCheckbox } = props;

    if (_.isEmpty(dataQuiz)) {
        return <></>;
    }

    const handleCheckboxChild = (e, aId, qId) => {
        // console.log(e.target.checked);
        handleCheckbox(aId, qId);
    };

    return (
        <>
            {(dataQuiz.image && (
                <div className="q-image">
                    <img
                        src={`data:image/jpeg;base64,${dataQuiz.image}`}
                        alt=""
                    />
                </div>
            )) || (
                <div className="q-image">
                    <img src="" alt="" />
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
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={a.isSelected}
                                        id={`flexCheckDefault-${index}`}
                                        onChange={(e) =>
                                            handleCheckboxChild(
                                                e,
                                                a.id,
                                                dataQuiz.questionId
                                            )
                                        }
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor={`flexCheckDefault-${index}`}
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
