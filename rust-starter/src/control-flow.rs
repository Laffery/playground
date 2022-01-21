fn add(a: i32, b: i32) -> i32 {
  a + b
}

fn main() {
  let sum = add(1, 2);
  if sum > 5 {
      println!("Greater than 5");
  } else if sum < 5 {
      println!("Less than 5");
  } else {
      println!("Equal with 5");
  }

  let condition: bool = true;
  let number: i32 = if condition { 1 } else { 0 };

  println!("{}", number);

  let mut index: u32 = 0;

  'counter: loop {
      if index > 10 {
          break 'counter;
      } else {
          println!("{}", index);
          index += 1;
      }
  }

  let mut counter = 0;
  let a = loop {
      counter += 1;
      if counter >= 10 {
          break counter * 2;
      }
  };
  println!("{}", a);

  let a = [1, 2, 3, 4, 5];
  for element in a.iter() {
      println!("{}", element);
  }

  for number in (1..5).rev() {
      println!("{}", number);
  }
}
