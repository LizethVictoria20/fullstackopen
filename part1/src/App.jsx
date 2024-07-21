import { useState } from "react";
import Button from "./components/Button";

const StatisticsLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad, total }) => {
  const average = good + neutral + bad / total;
  const positive = (100 * good) / total;
  return (
    <>
    <table>
      <tr>
        <td>
        <StatisticsLine text="Good" value={good} />
        </td>
      </tr>
      <tr>
        <td>
          <StatisticsLine text="Neutral" value={neutral} />
        </td>
      </tr>
      <td>
        <tr>
          <StatisticsLine text="Bad" value={bad} />
        </tr>
      </td>
      <tr>
        <td>
          <StatisticsLine text="Average" value={average.toFixed(2)} />
        </td>
      </tr>
      <tr>
        <td>
          <StatisticsLine text="Positive" value={`${positive.toFixed(2)}%`} />
        </td>
      </tr>
    </table>
    </>
  );
};

const GeneralInformation = ({ goodReview, neutralReview, badReview }) => {
  return (
    <div>
      <h1>Give a feedback</h1>
      <Button onClick={goodReview} text="Good" />
      <Button onClick={neutralReview} text="Neutral" />
      <Button onClick={badReview} text="Bad" />
      <h2>Statistics</h2>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const goodReview = () => {
    const goodReview = good + 1;
    setGood(goodReview);
    const totalReviews = total + 1;
    setTotal(totalReviews);
  };

  const neutralReview = () => {
    const neutralReview = neutral + 1;
    setNeutral(neutralReview);
    const totalReviews = total + 1;
    setTotal(totalReviews);
  };

  const badReview = () => {
    const badReview = bad + 1;
    setBad(badReview);
    const totalReviews = total + 1;
    setTotal(totalReviews);
  };
  if (good != 0 || neutral != 0 || bad != 0) {
    return (
      <div>
        <GeneralInformation
          goodReview={goodReview}
          neutralReview={neutralReview}
          badReview={badReview}
        />
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      </div>
    );
  } else {
    return (
      <div>
        <GeneralInformation
          goodReview={goodReview}
          neutralReview={neutralReview}
          badReview={badReview}
        />
        <p>No feedback given</p>
      </div>
    );
  }
};

export default App;
