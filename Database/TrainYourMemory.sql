USE [master]
GO
CREATE DATABASE [TrainYourMemory]
GO
USE [TrainYourMemory]
GO

CREATE TABLE [dbo].[Users] (
    [Id]    INT           IDENTITY (1, 1) NOT NULL,
    [Email] VARCHAR (MAX) NOT NULL,
    [Name]  VARCHAR (50)  NULL,
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
    [UserId]     INT      NOT NULL,
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

CREATE PROCEDURE [dbo].[InsertUser]
	@Email varchar(max),
	@Name varchar(max)
AS
BEGIN
	INSERT INTO [dbo].[Users] ([Email], [Name])
	VALUES (@Email, @Name)
END
GO

CREATE PROCEDURE [dbo].[InsertLocation]
	@Name varchar(max)
AS
BEGIN
	INSERT INTO [dbo].[Locations] ([Name])
	VALUES (@Name)
END
GO

CREATE PROCEDURE [dbo].[InsertDrink]
    @Name varchar(50),
    @Type varchar(50),
    @AlcoholPercent decimal(5,3)
AS
BEGIN
	INSERT INTO [dbo].[Drinks] ([Name], [Type], [AlcoholPercent])
	VALUES (@Name, @Type, @AlcoholPercent)
END
GO

CREATE PROCEDURE [dbo].[InsertLog]
	@UserID int,
	@LocationID int,
	@DrinkID int,
	@Quantity int,
	@Price money,
	@Date datetime = NULL
AS
BEGIN
	SET @Date = ISNULL(@Date, GETDATE()) 
	INSERT INTO [dbo].[Log] ([UserId], [LocationId], [DrinkId], [Quantity], [Price], [Date])
	VALUES (@UserID, @LocationID, @DrinkID, @Quantity, @Price, @Date)
END
GO

CREATE VIEW dbo.View_Log
AS
SELECT [dbo].[Log].[Id], [dbo].[Users].[Name] AS [User], [dbo].[Locations].[Name] AS Location, [dbo].[Drinks].[Name] AS Drink, [dbo].[Drinks].[Type], [dbo].[Drinks].[AlcoholPercent], [dbo].[Log].[Quantity], [dbo].[Log].[Price], [dbo].[Log].[Date]
FROM [dbo].[Log] 
    INNER JOIN [dbo].[Users] ON [dbo].[Log].[UserId] = [dbo].[Users].[Id]
    INNER JOIN [dbo].[Locations] ON [dbo].[Log].[LocationId] = [dbo].[Locations].[Id]
    INNER JOIN [dbo].[Drinks] ON [dbo].[Log].[DrinkId] = [dbo].[Drinks].[Id]
GO

