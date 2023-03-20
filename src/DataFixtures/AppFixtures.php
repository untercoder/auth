<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Faker\Generator;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private ?Generator $faker;

    public function __construct(private UserPasswordHasherInterface $passwordHasher)
    {
        $this->faker = Factory::create();
    }

    public function load(ObjectManager $manager): void
    {
        for ($i = 0; $i < 20; $i++) {
            $product = new User();
            $product->setName('user'.$i);
            $product->setRoles([]);
            $product->setBirthday($this->faker->dateTime);
            $product->setEmail($this->faker->email);
            $hashedPassword = $this->passwordHasher->hashPassword(
                $product,
                'password'.$i
            );
            $product->setPassword($hashedPassword);

            $manager->persist($product);
        }

        $manager->flush();
    }
}
