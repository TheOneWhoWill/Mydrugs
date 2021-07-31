export interface Question {
  question: string;
  answer: string;
}

export const Question = ({ question, answer }: Question) => (
  <>
    <div className="container">
      <h2 className="question">{question}</h2>
      <p className="answer">{answer}</p>
    </div>

    <style jsx>
      {`
        .container {
          margin-bottom: 5vh;
          max-width: 1000px;
          min-width: 700px;
        }

        .question {
          color: white;
          line-height: 60px;
          margin-bottom: 3vh;
          letter-spacing: 1.5px;
        }

        .answer {
          line-height: 30px;
          font-weight: 300;
          font-size: 20px;
          color: rgb(212, 212, 212);
        }
      `}
    </style>
  </>
);
