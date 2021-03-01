<?php


namespace App\Repository;


use App\Entity\Article;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class ArticleRepository extends ServiceEntityRepository
{
    /**
     * @method Article|null find($id, $lockMode = null, $lockVersion = null)
     * @method Article|null findOneBy(array $criteria, array $orderBy = null)
     * @method Article[]    findAll()
     * @method Article[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Article::class);
    }
}