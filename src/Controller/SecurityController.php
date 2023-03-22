<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    #[Route('/api/login', name: 'api_login', methods: ['POST'])]
    public function login(): JsonResponse
    {
        $user = $this->getUser();

        if($user !== null) {
            return $this->json(
                [
                    'roles' => $user->getRoles(),
                    'email' => $user->getUserIdentifier(),
                    'name' => $user->getName(),
                    'date' => $user->getBirthday()
                ]
            );
        }

        return $this->json(['error' => "401 Unauthorized"], 401);
    }
}