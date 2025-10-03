import NumGen from "@/components/NumGen";
import styles from "./page.module.css";
import SignIn from "@/components/SignIn";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { GetGuesses } from "@/lib/data/guess";
import NavBar from "@/components/NavBar";
import WhiskeyDay from "@/components/WhiskeyDay";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  const guesses = await GetGuesses();

  const guessList = guesses.map((guess, index) => {
    return (
      <tr key={index}>
        <td>{guess.submitter}</td>
        <td>{guess.content}</td>
        <td>{guess.createDate.toLocaleDateString()}</td>
      </tr>
    )
  });

  return (
    <div className={styles.page}>
      <nav>
        {
          session ? <NavBar /> : <></>
        }
      </nav>
      <main className={styles.main}>        
        {
          session ? 
            <>
            <WhiskeyDay />
            <NumGen />
            <p id="guessCounter">You've tried {guesses.length} / 10,000 combinations.</p>
            <div id="guessTableContainer">
              <table className="table table-dark table-sm">
                <thead>
                  <tr>
                    <td>Submitter</td>
                    <td>Guess</td>
                    <td>Create Date</td>
                  </tr>
                </thead>
                <tbody>
                  {guessList}
                </tbody>
              </table> 
            </div> 
            </> 
            : <SignIn />
        }
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
