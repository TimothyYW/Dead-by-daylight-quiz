# Dead by daylight quiz

This quiz is for fun and entertainment, by asking question that is related to the game lore and fact.

![Screenshot display testing result](assets/screenshots/Mock-up-screenshot.JPG)

[Link to deployed site](https://timothyyw.github.io/Dead-by-daylight-quiz/)

## Feature

### Logo

Logo of the quiyz with similar color and font from originial game. It is also function as home page anchor. By clicking the logo users will be able to return back to the start screen, and users could start playing the game again.

![Logo](assets/screenshots/logo-screenshot.JPG)

#### Hero image

Background hero image featuring one of the iconic feature in game with dark tone and the scary atmosphere.

![Hero image](assets/images/background.jpg)

#### Index

Aside featuring the logo of the quiz, there is the start button to start the quiz.

![Start quiz button](assets/screenshots/start-button-screenshot.JPG)

#### Game

The game feature ten question that depending on the number of answers will give the user with message.


![Quiz page](assets/screenshots/question-screenshot.JPG)

After answering all question, depending on the amount of the answer that is correct a message will pop-up.If too many wrong answer or below five correct answer, user will be suggested to go back and try again. While if the user answer more than five question correct, they will get notify that the entity is aware of their knowledge.

![End quiz message](assets/screenshots/game-result-screenshot.JPG)
#### UX

The quiz will be focusing only on the lore of dead by daylight, with many contraversial change in the gameplay mechanic, it is amusing to just diving into the lore and the fact instead of gameplay.

The font I use for the logo is Lato, whihc is similar to the original logo as can be seen below:

![Dead by daylight logo](assets/screenshots/dbd-logo.png)

For the text in the quiz, I use Roboto for easy read and the simply look it has.

The wireframes for the index and game section as can be seen below:

![Index page](assets/screenshots/Index-wireframe.jpg)

![Game quiz](assets/screenshots/game-wireframe.jpg)

## Future update and plan

Add more questions in the near future.

Add question with images.

Changing score system.

## Testing

Testing HTML through W3C Validator and CSS using Jigsaw, screenshot of proof can be seen below:

Index:

![Index test result](assets/screenshots/index-result-screenshot.JPG)

Game:

![Game test result](assets/screenshots/game-result-screenshot.JPG)

CSS:

![CSS test result](assets/screenshots/css-test-result.JPG)

Javascript:

-There are 10 functions in this file.

-Function with the largest signature take 1 arguments, while the median is 0.

-Largest function has 8 statements in it, while the median is 5.

-The most complex function has a cyclomatic complexity value of 2 while the median is 2.

Lighthouse devtool:

The lighthouse devtool ensure the website`s level of performance, accessabllity, best practice, and SEO. The score of the website can be seen below:

![Lighthouse test result](assets/screenshots/Lighthouse-tool-screenshot.JPG)

Wave

The wave evaluation tool to ensure that there are no color contrasts, as can be seen in the result below:

![Wave test result](assets/screenshots/Wave-result-screenshot.JPG)

## Other testing

**Purpose**|**Method**|**Expected**|**Result**
:-----:|:-----:|:-----:|:-----:
Ensure logo response as home button|Click the logo after finishing Quiz|User return to the start page|Success
Ensure next button appear after answering question|Answer first question to see if the button appear|Next button appear after answering the question|Success
Ensure the user could not pick other answers once answering |Answer first question, then see if user can click other answer|User unable to pick other answer|Success
Check if the message at the end of quiz appear depending on the amount of correct answer|Try first answering question correct above five afterward below five|User got message that is intend to them|Success

## Technologies utilized

HTML is used for write the code and to built the website.

CSS is used style the code.

JavaScript is to create functions for the game.

Google Fonts is providing the style for the letter that is written and displayed on the website.

Github is where the code will be stored.

Google Chrome Lighthouse is used to check the website performance and accessibility.

Balsemig is used to make the sketch wireframes for the website strucutres.

W3C used to validated and ensured there are no errors on HTML code.

Jigsaw is to ensure that there are no error on the CSS code.

Wave is to check if there is color contrast.

## Bugs

There was a confusion of why is the resetState would not remove the duplicated code, but afte adjustment the code function properly.

## Deployment

To deploy the project please follow step below:

1. Log in to Github.
2. Go to setting right next to Insight.
3. Within setting navigate to Pages below Codespaces.
4. Under the Branch, change from "none" to "main".
5. Click "Save".
6. Wait for few minute.
7. A link will be provided.

## Version Control

To use version control utilizing the git command:

1. Git add . will create a file with the new code that has been added
2. Git commit is to commit the changes
3. Git push is to add the version of the file in to the repository
After creating new version of the file it will be commited, which means it can be viewed and compared previous and newer version.

## Cloning Repository

For cloning repository, can be done as followed:

1. Open github repository
2. Above file open drop down menu code copy URL, there are three version HTTP, SSH, and GitCLI, all version work on cloning.
3. Open Git Bash.
4. Type Git clone URL

## Credit

Based idea:

https://www.youtube.com/watch?v=PBcqGxrr9g8&t=1004s

Loop:

https://www.tutorialspoint.com/javascript/javascript_for_loop.htm

Hero image:

https://wallpapercave.com/dead-by-daylight-wallpapers

resetState:

https://stackoverflow.com/questions/75571616/quiz-in-javascript

Docstrings:

https://dev.to/stephencweiss/write-your-own-javascript-contracts-and-docstrings-42ho

Favicon:

https://www.cleanpng.com/free/dead-by-daylight.html