USE [master]
GO
CREATE DATABASE [TrainYourMemory]
GO
USE [TrainYourMemory]
GO

CREATE TABLE [dbo].[Users] (
    [Id] VARCHAR (450) NOT NULL,
    [Name]  VARCHAR (50)  NOT NULL,
    CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED ([Id] ASC)
);

CREATE TABLE [dbo].[Locations] (
    [Id]   INT           IDENTITY (1, 1) NOT NULL,
    [Name] VARCHAR (MAX) NOT NULL,
    CONSTRAINT [PK_Locations] PRIMARY KEY CLUSTERED ([Id] ASC)
);

CREATE TABLE [dbo].[Drinks] (
    [Id]   INT          IDENTITY (1, 1) NOT NULL,
    [Name] VARCHAR (50) NOT NULL,
    [Type] VARCHAR (50) NOT NULL,
    [AlcoholPercent] DECIMAL(5, 3) NOT NULL, 
    CONSTRAINT [PK_Drinks] PRIMARY KEY CLUSTERED ([Id] ASC)
);

CREATE TABLE [dbo].[Log] (
    [Id]         INT      IDENTITY (1, 1) NOT NULL,
    [UserId] VARCHAR (450) NOT NULL,
    [LocationId] INT      NOT NULL,
    [DrinkId]    INT      NOT NULL,
    [Quantity]   INT      NOT NULL,
    [Price]      MONEY    NOT NULL,
    [Date]       DATETIME NOT NULL,
    CONSTRAINT [PK_Log] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Log_Users] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([Id]),
    CONSTRAINT [FK_Log_Locations] FOREIGN KEY ([LocationId]) REFERENCES [dbo].[Locations] ([Id]),
    CONSTRAINT [FK_Log_Drinks] FOREIGN KEY ([DrinkId]) REFERENCES [dbo].[Drinks] ([Id])
);
CREATE TABLE [dbo].[Friends]
(
    [Id]         INT      IDENTITY (1, 1) NOT NULL,
    [UserId] VARCHAR (450) NOT NULL,
    [FriendId] VARCHAR (450) NOT NULL,
    CONSTRAINT [PK_Friends] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_User] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users]([Id]),
    CONSTRAINT [FK_Friend] FOREIGN KEY ([FriendId]) REFERENCES [dbo].[Users]([Id])
);
