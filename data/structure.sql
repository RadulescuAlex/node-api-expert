SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE words (
  id int(11) NOT NULL,
  domain text NOT NULL,
  word text NOT NULL,
  explication text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO words (id, domain, word, explication) VALUES
(1, 'drept', 'Drept subiectiv', 'Facultate sau prerogativa recunoscuta de lege persoanei, subiect activ al raportului juridic, de a pretinde subiectului (sau subiectelor) pasive sa savarseasca o anumita actiune sau sa se abtina de la savarsirea unei actiuni, putand recurge, la nevoie, la forta de constrangere a statului pentru asigurarea infaptuirii conduitei pretinse'),
(2, 'drept', 'Drept obiectiv', 'Dreptul obiectiv desemnează totalitatea regulilor juridice de conduită sau anormelor juridice din societate. El reprezintă totalitatea normelor de conduită instituite deorganele statului şi impuse indivizilor sau colectivităţii în cadrul vieţii sociale, uneori chiarprin forţa de constrângere a statului.'),
(4, 'medicina', 'pelvis', 'Parte a scheletului uman situată la baza trunchiului, formată din oasele coxale și din osul sacru.');


ALTER TABLE words
  ADD PRIMARY KEY (id);


ALTER TABLE words
  MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
