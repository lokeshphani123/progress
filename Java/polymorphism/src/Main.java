public class Main {

    public static void main(String[] args){

        //Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance.
        
        Animal animal = new Animal();

        Animal pig = new Pig();

        Animal dog = new Dog();

        animal.animalSound();
        pig.animalSound();
        dog.animalSound();
    }
}
