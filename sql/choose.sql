/*
Navicat MySQL Data Transfer

Source Server         : bao
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : muen

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2019-08-14 18:27:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for choose
-- ----------------------------
DROP TABLE IF EXISTS `choose`;
CREATE TABLE `choose` (
  `chooseId` int(11) NOT NULL AUTO_INCREMENT,
  `voteId` int(11) NOT NULL,
  `chooseContent` varchar(255) NOT NULL,
  `totalNum` int(11) NOT NULL,
  PRIMARY KEY (`chooseId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
