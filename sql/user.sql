/*
Navicat MySQL Data Transfer

Source Server         : bao
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : muen

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2019-08-14 18:27:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `realName` varchar(255) NOT NULL,
  `userType` int(11) NOT NULL DEFAULT '3',
  `phoneNum` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `userIcon` varchar(255) NOT NULL,
  `createTime` datetime DEFAULT NULL,
  `groupId` int(11) DEFAULT '-1',
  `sign` varchar(255) DEFAULT NULL,
  `token` text,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
