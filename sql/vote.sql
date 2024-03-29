/*
Navicat MySQL Data Transfer

Source Server         : bao
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : muen

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2019-08-14 18:27:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for vote
-- ----------------------------
DROP TABLE IF EXISTS `vote`;
CREATE TABLE `vote` (
  `voteId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `info` varchar(255) DEFAULT NULL,
  `createTime` datetime NOT NULL,
  `anonymity` smallint(6) NOT NULL DEFAULT '1',
  `isSingle` smallint(6) NOT NULL DEFAULT '1',
  `userId` int(11) NOT NULL,
  `startTime` varchar(255) NOT NULL,
  `endTime` varchar(255) NOT NULL,
  PRIMARY KEY (`voteId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
