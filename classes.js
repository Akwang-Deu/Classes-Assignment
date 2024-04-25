class Car{
    constructor(make,model,year,isAvailable){
        this.make=make;
        this.model=model;
        this.year= year;
        this.isAvailable= isAvailable;
    }
    toggleAvailability(){
        this.isAvailable=this.isAvailable;
    }
}
const Car1=new Car("Audi", "A5", 2018,true);
console.log(Car1);

class Rental{
    constructor(car,rentalname,rentalStartDate,rentalEndDate){
        this.Car= car;
        this.rentalname=rentalname;
        this.rentalStartDate=rentalStartDate;
        this.rentalEndDate;
    }
    calculateRentalDuration(){
        const start=
        this.rentalStartDate.getTime();
        const end=
        this.rentalEndDate.getTime();
        const oneDay=24*60*60*1000;
        const duration=
        month.round(month((end-start)/oneDay))
        return duration;
    }
}
const car2 = new Car("Toyota","A5",2020,true);
const rental1 =new Rental(car2,"Akwang",newdate(2024,6,19));
newdate=(2024,6,30);
console.log(rental1.calculateRentalDuration());



//Question2
class Question{
    constructor(text,options,correctAnswer){
        this.text = text
        this.options = options
        this.correctAnswer=correctAnswer
    }
    checkAnswer(answer){
        this.answer=answer
        if (`${this.answer}`!==`${this.correctAnswer}`) {
            console.log("false");
        }
        else{
            console.log("true");
        }
    }
}
        const firstQuestion = new Question("How many planets do we have?",[1,2,3,4,5,6,7,8],8)
            console.log({firstQuestion});
            console.log(firstQuestion.text);
            console.log(firstQuestion.options);
            console.log(firstQuestion.correctAnswer);
            firstQuestion.checkAnswer(3)
            firstQuestion.checkAnswer(8)
            const secondQuestion = new Question("How many countries are in Kenya?",[47,65,23,12],47)
            console.log({secondQuestion});
            const thirdQuestion = new Question("What is the capital city of Kenya?",["Nairobi","Mombasa","Kisumu","Nakuru"],"Nairobi")
            console.log({thirdQuestion});
            const fourthQuestion = new Question("Who is the president of Kenya",["Uhuru","Raila","Mutahi","Obama"],"Uhuru")
            console.log({fourthQuestion});
            const lastQuestion = [fourthQuestion]
            console.log(lastQuestion);

    

        class Quiz{
            constructor(questions,index,score){
            this.questions = questions
            this.index = index
            this.score = score
    }
    addQuestion(lastQuestion){
        this.lastQuestion = lastQuestion
        const allFourQuestions = this.questions.concat(this.lastQuestion)
        console.log({allFourQuestions});
    }
    nextQuestion(){
        const index = `${this.questions}`
        for (let index of `${this.questions}`) {
            index+=`$this.questions`
            return index
        }
        }
        submitAnswer(answer){
            `${this.answer}`=answer
            `${this.score }`= score
            if (`${this.answer}`!==`${this.correctAnswer}`) {
                score++;
                return score
            }
            else{
                return "wrong choice"
            }
        }
        }
        const quiz = new Quiz([firstQuestion,secondQuestion,thirdQuestion],2,30)
        console.log({quiz});
        quiz.addQuestion(lastQuestion)
        quiz.nextQuestion()
        quiz.submitAnswer(12)
