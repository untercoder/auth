<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    #[Route('/api/login', name: 'api_login', methods: ['POST'])]
    public function login()
    {
        $user = $this->getUser();
        return $this->json(
            [
                'roles' => $user->getRoles(),
                'email' => $user->getUserIdentifier(),
                'name' => $user->getName(),
                'date' => $user->getBirthday()
            ]
        );
    }
}