import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  /**
   *  {
      icone : "",
      title :  "Développement d'application web et mobile",
      text : ""
    }
   */

  services : any[] = [
    {
      icone : "",
      title :  "Développement d'application web et mobile",
      text : "JEEF SOLUTION TECH excelle dans le développement sur mesure d'applications web et mobiles, intégrant les dernières technologies. Notre équipe expérimentée offre une approche collaborative, privilégiant la qualité et la satisfaction client. Choisissez-nous pour une transformation numérique réussie et des expériences utilisateur exceptionnelles. Contactez-nous pour concrétiser vos idées dès aujourd'hui."
    },
    {
      icone : "",
      title :  "Traitement de données & BIG DATA",
      text : "JEEF SOLUTION TECH excelle dans le traitement de données et le Big Data, offrant des solutions complètes de la collecte à l'analyse. Notre expertise repose sur les dernières technologies pour garantir une gestion efficace des données et une prise de décision éclairée. Optez pour JEEF SOLUTION TECH pour optimiser votre stratégie de données. Contactez-nous pour exploiter pleinement le potentiel de vos données."
    },
    {
      icone : "",
      title :  "Cloud Computing",
      text : "JEEF SOLUTION TECH est votre partenaire de confiance en Cloud Computing. Nous assurons une migration fluide, une gestion efficiente des ressources, et une sécurité optimale. Optez pour JEEF SOLUTION TECH pour une infrastructure cloud fiable et évolutive. Contactez-nous pour une expérience de Cloud Computing personnalisée, maximisant l'efficacité de vos opérations informatiques."
    },
    {
      icone : "",
      title :  "Formation",
      text : "JEEF SOLUTION TECH offre des formations spécialisées dans le domaine de l'informatique (IT). Nos programmes de formation sont conçus pour développer les compétences techniques, renforcer les connaissances et favoriser l'excellence professionnelle. Optez pour JEEF SOLUTION TECH pour une formation IT de qualité, adaptée à l'évolution rapide du secteur."
    },
    {
      icone : "",
      title :  "Réseau informatique",
      text : " JEEF SOLUTION TECH propose des services complets de mise en place de réseaux informatiques. De la conception à l'installation, nous assurons une infrastructure robuste, sécurisée et évolutive. Notre équipe expérimentée garantit une connectivité optimale, favorisant une productivité accrue. Optez pour JEEF SOLUTION TECH pour une mise en place de réseau informatique efficace et adaptée à vos besoins. Contactez-nous pour une solution réseau sur mesure."
    },
    {
      icone : "",
      title :  "Service de téléphonie",
      text : "JEEF SOLUTION TECH offre des services de téléphonie professionnelle. Notre solution assure une communication fiable et efficace pour votre entreprise. Nous proposons des systèmes téléphoniques avancés, des solutions VoIP et une connectivité sécurisée. Choisissez JEEF SOLUTION TECH pour une téléphonie professionnelle optimisée. Contactez-nous pour une communication sans faille dans votre entreprise."
    },
    {
      icone : "",
      title :  "Consultance IT",
      text : "JEEF SOLUTION TECH propose des services de consultation IT. Notre équipe d'experts conseille sur les meilleures pratiques en matière de technologies de l'information pour optimiser l'efficacité opérationnelle. Choisissez JEEF SOLUTION TECH pour des conseils IT stratégiques, adaptés à vos besoins. Contactez-nous pour une consultation personnalisée et maximisez le potentiel de votre infrastructure IT."
    },
    {
      icone : "",
      title :  "Internet des objets(IOT)",
      text : "JEEF SOLUTION TECH excelle dans le domaine de l'Internet des objets (IoT). Nous offrons des solutions novatrices pour connecter, surveiller et gérer vos appareils. Notre expertise en IoT garantit une intégration transparente et des données exploitables. Optez pour JEEF SOLUTION TECH pour exploiter pleinement le potentiel de l'Internet des objets. Contactez-nous pour une transformation numérique axée sur l'IoT."
    },
    {
      icone : "",
      title :  "Marqueting digitale",
      text : "JEEF SOLUTION TECH excelle dans le domaine de l'Internet des objets (IoT). Nous offrons des solutions novatrices pour connecter, surveiller et gérer vos appareils. Notre expertise en IoT garantit une intégration transparente et des données exploitables. Optez pour JEEF SOLUTION TECH pour exploiter pleinement le potentiel de l'Internet des objets. Contactez-nous pour une transformation numérique axée sur l'IoT."
    }
  ]

}
