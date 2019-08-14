/*
Navicat MySQL Data Transfer

Source Server         : bao
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : muen

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2019-08-14 13:29:59
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of choose
-- ----------------------------
INSERT INTO `choose` VALUES ('1', '1', '选项1', '0');
INSERT INTO `choose` VALUES ('2', '1', '选项2', '0');
INSERT INTO `choose` VALUES ('3', '1', '选项3', '0');
INSERT INTO `choose` VALUES ('4', '1', '选项4', '0');
INSERT INTO `choose` VALUES ('5', '2', '选项4', '0');
INSERT INTO `choose` VALUES ('6', '2', '选项1', '0');
INSERT INTO `choose` VALUES ('7', '2', '选项2', '0');
INSERT INTO `choose` VALUES ('8', '2', '选项3', '0');
