use rand::Rng;
use std::cmp::Ordering;
use std::io::stdin;

fn main() {
    println!("Guess the number");

    let secret_num = rand::thread_rng().gen_range(1..101);

    // println!("The secret number is {}", secret_num);

    loop {
        println!("Please input your guess");

        let mut guess = String::new();
        stdin().read_line(&mut guess).expect("Failed to read line");
        println!("Your guess is {}", guess);

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        match guess.cmp(&secret_num) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You got it!");
                break;
            }
        }
    }
}
